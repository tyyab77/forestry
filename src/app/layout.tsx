import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Forestry",
    description: "Get forest education from world top teacher",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
             <link rel="icon" href="/forestlgog.png" />
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
            >
                {children}
            </body>
        </html>
    );
}
