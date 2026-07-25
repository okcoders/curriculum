import { createClient } from "@/app/components/lib/supabase";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { id } = await params
    const supabase = createClient();

    const { data: project } = await supabase
        .from("projects")
        .select()
        .eq("id", id)
        .maybeSingle();

    if (!project) return {title: "Project does not exist"}
    return {
        title: project.title,
        description: project.description
    }
}

export default async function ProjectPage ({
    params,
}: Props) {
    const { id } = await params
    const supabase = createClient();
    
    const { data: project } = await supabase
        .from("projects")
        .select()
        .eq("id", id)
        .maybeSingle();

    const metadata: Metadata = {
        title: project?.title,
        description: project?.description
    }

    if (!project) notFound();
    return (
        <div>
            <h1>Project ID: {project.id}</h1>
            <p>Description: {project.description}</p>
        </div>
)
}