import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "About Description",
    keywords: ["About", "Description", "Keywords"],
};

export default function AboutLayoust({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className="flex flex-col items-center p-24">
        <span className="text-lg">About layout</span>
        {children}
    </main>;
}