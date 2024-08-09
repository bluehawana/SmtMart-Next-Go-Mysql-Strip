import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

type LayoutProps = {
    children: React.ReactNode;
    title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = 'SmtMart' }) => {
    return (
        <div className="min-h-screen bg-vercel-black text-vercel-white">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>

            <header className="border-b border-vercel-gray-800">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold">
                            SmtMart
                        </Link>
                        <div className="space-x-4">
                            <Link href="/products" className="hover:text-vercel-gray-300">
                                Products
                            </Link>
                            <Link href="/cart" className="hover:text-vercel-gray-300">
                                Cart
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-6 py-8">
                {children}
            </main>

            <footer className="border-t border-vercel-gray-800">
                <div className="container mx-auto px-6 py-4 text-center text-vercel-gray-400">
                    © {new Date().getFullYear()} SmtMart. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;