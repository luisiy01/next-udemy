import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Page",
    description: "Contact Description",
    keywords: ["Contact", "Description", "Keywords"],
};

export default function ContactPage() {
    return (
        <div>
            <span>Contact page</span>
        </div>
    )
}