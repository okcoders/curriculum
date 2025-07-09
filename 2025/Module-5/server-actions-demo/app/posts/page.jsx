import prisma from '@/lib/prisma';
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
}