import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Title",
    description: "SEO Description",
    keywords: ["SEO", "Description", "Keywords"],
};

export default function AboutPage() {
    return (
        <div>
            <span>About page</span>
        </div>
    )
}