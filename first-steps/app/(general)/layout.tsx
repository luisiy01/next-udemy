import { Navbar } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "About Description",
    keywords: ["About", "Description", "Keywords"],
};

export default function GeneralLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />

            <main className="flex flex-col items-center p-24">
                <span className="text-lg">Hola mundo</span>
                {children}
            </main>
        </>


    );
}