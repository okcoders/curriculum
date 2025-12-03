import { createPost } from "@/app/actions/post";
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
}