import Link from 'next/link';
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
}