"use server";
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function createPost(formData) {
    const title = formData.get('title');
    const content = formData.get('content');
    
    // Basic validation
    if (!title || !content) {
        throw new Error('Title and content are required');
    }
    
    // Create the post
    await prisma.post.create({
        data: {
            title,
            content
        }
    });
    
    // Update the UI
    revalidatePath('/posts');
    redirect('/posts');
}