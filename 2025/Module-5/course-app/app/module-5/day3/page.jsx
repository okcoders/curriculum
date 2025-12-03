"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";
import Link from "next/link";

export default function Day3() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className="bg-stone-400 h-auto pb-20 text-black">
            <h1 className="text-center text-4xl pt-24 font-bolds text-white">
                Module 5: Day 3
            </h1>
            <p className="text-center text-2xl mt-2 text-white">
                Creating Data & Simple Form Submission
            </p>

            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Demo Setup</h2>
                    <p>
                        We'll create a project to practice server actions, forms, and database operations. 
                    </p>
                    
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-6">
                        <h3 className="font-bold text-lg text-green-800">
                            Initialize Demo Project
                        </h3>
                        <p className="mt-2">Set up our practice project:</p>
                        <pre className="mt-1 rounded-lg">
                            <code className="language-jsx">
{`npx create-next-app@latest server-actions-demo
cd server-actions-demo
npm install prisma @prisma/client
npx prisma init`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Database Schema & Connection</h2>
                    <p>
                        Set up the database connection and create a simple model.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-6">
                        <h3 className="font-bold text-lg text-blue-800">
                            Schema Setup
                        </h3>
                        <p className="mt-2"><code>prisma/schema.prisma</code>:</p>
                        <pre className="mt-1 rounded-lg">
                            <code className="language-jsx">
{`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  createdAt DateTime @default(now())
}`}
                            </code>
                        </pre>
                        <p className="mt-2">Push the schema to your database:</p>
                        <pre className="mt-1 rounded-lg">
                            <code className="language-jsx">
{`npx prisma db push
npx prisma generate`}
                            </code>
                        </pre>
                        <p>Check your updated database at <strong>console.prisma.io</strong></p>
                    </div>
                </div>
            </div>

            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Prisma Client Setup</h2>
                    <p>
                        Create a Prisma client instance that we can use throughout our application.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-6">
                        <h3 className="font-bold text-lg text-blue-800">
                            Create Prisma Client
                        </h3>
                        <p className="mt-2">Create <code>lib/prisma.js</code>:</p>
                        <pre className="mt-1 rounded-lg">
                            <code className="language-jsx">
{`import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Server Actions</h2>
                    <p>
                        Server Actions are functions that run on the server and handle data mutations. 
                        They're the main way to handle form submissions and database operations in Next.js App Router.
                    </p>
                    
                    <ul className="list-disc ml-6 space-y-2 mb-6">
                        <li>
                            <strong>What are Server Actions?</strong> Functions that run on the server and handle things like creating or updating data.
                        </li>
                        <li>
                            <strong>Why use them?</strong> They keep sensitive logic off the client and simplify form handling.
                        </li>
                        <li>
                            <strong>Security:</strong> Database operations and secrets stay on the server.
                        </li>
                    </ul>
                    
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-6">
                        <h3 className="font-bold text-lg text-blue-800">
                            Create Server Actions File
                        </h3>
                        <p className="mt-2">Create <code>app/actions/posts.js</code>:</p>
                        <pre className="mt-1 rounded-lg">
                            <code className="language-jsx">
{`"use server";
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
}`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Display Posts Page</h2>
                    <p>
                        Create a page to display all posts from the database.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-6">
                        <h3 className="font-bold text-lg text-blue-800">
                            Posts List Page
                        </h3>
                        <p className="mt-2">Create <code>app/posts/page.jsx</code>:</p>
                        <pre className="mt-1 rounded-lg">
                            <code className="language-jsx">
{`import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function PostsPage() {
    const posts = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' }
    });
    
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Posts</h1>
                <Link 
                    href="/posts/new"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    New Post
                </Link>
            </div>
            
            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="border p-4 rounded-lg">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-600 mt-2">{post.content}</p>
                        <p className="text-sm text-gray-400 mt-2">
                            {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Create Post Form</h2>
                    <p>
                        Build a form that uses our Server Action to create new posts.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-6">
                        <h3 className="font-bold text-lg text-blue-800">
                            New Post Form Page
                        </h3>
                        <p className="mt-2">Create <code>app/posts/new/page.jsx</code>:</p>
                        <pre className="mt-1 rounded-lg">
                            <code className="language-jsx">
{`import { createPost } from '@/app/actions/posts';

export default function NewPostPage() {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
            
            <form action={createPost} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter post title"
                    />
                </div>
                
                <div>
                    <label htmlFor="content" className="block text-sm font-medium mb-2">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        required
                        rows={6}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter post content"
                    />
                </div>
                
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Create Post
                    </button>
                    <a
                        href="/posts"
                        className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
                    >
                        Cancel
                    </a>
                </div>
            </form>
        </div>
    );
}`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Navigation Setup</h2>
                    <p>
                        Add basic navigation to test our demo application.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-6">
                        <h3 className="font-bold text-lg text-blue-800">
                            Update Root Layout
                        </h3>
                        <p className="mt-2">Update <code>app/layout.js</code>:</p>
                        <pre className="mt-1 rounded-lg">
                            <code className="language-jsx">
{`import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: 'Server Actions Demo',
    description: 'Learning Next.js Server Actions',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <nav className="bg-gray-800 text-white p-4">
                    <div className="max-w-4xl mx-auto flex gap-4">
                        <Link href="/" className="hover:text-gray-300">
                            Home
                        </Link>
                        <Link href="/posts" className="hover:text-gray-300">
                            Posts
                        </Link>
                    </div>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    );
}`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">SQL Reinforcement</h2>
                    <p>
                        Understanding the SQL operations behind Prisma helps you become a better developer.
                    </p>
                    
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-6">
                        <h3 className="font-bold text-lg text-green-800">
                            Prisma to SQL Translation
                        </h3>
                        <p className="mt-2">This Prisma operation:</p>
                        <pre className="mt-1 rounded-lg">
                            <code className="language-jsx">
{`await prisma.post.create({
    data: {
        title: "My First Post",
        content: "This is the content"
    }
});`}
                            </code>
                        </pre>
                        <p className="mt-2">Translates to this SQL:</p>
                        <pre className="mt-1 rounded-lg">
                            <code className="language-jsx">
{`INSERT INTO Post (id, title, content, createdAt) 
VALUES (
    'cuid_generated_id', 
    'My First Post', 
    'This is the content', 
    NOW()
);`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Apply to Your Portfolio</h2>
                    <p>
                        Now that you've practiced with the demo project, you can choose to apply these patterns 
                        to your portfolio if they fit your vision.
                    </p>
                    
                    <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg mt-6">
                        <h3 className="font-bold text-lg text-purple-800">
                            Your Portfolio, Your Choice
                        </h3>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>
                                <strong>Want to add projects dynamically?</strong> Use the same pattern with a Project model.
                            </li>
                            <li>
                                <strong>Want a blog section?</strong> The Post model we created could work perfectly.
                            </li>
                            <li>
                                <strong>Have a different idea?</strong> Adapt the Server Action pattern to fit your needs.
                            </li>
                            <li>
                                <strong>Prefer static content?</strong> That's totally fine too—your portfolio should represent you.
                            </li>
                        </ul>
                        <p className="mt-4 font-medium">
                            The demo project is your Code Playground. Your portfolio is your masterpiece.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}