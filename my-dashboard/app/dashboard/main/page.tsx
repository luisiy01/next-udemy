import { SimpleWidget } from "@/components";

export default function MainPage() {
    return (
        <div className="flex flex-col text-black">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <span className="text-5xl">Informacion General</span>

            <div className="flex flex-wrap p2 items-center justify-center">
                <SimpleWidget />
            </div>
        </div>
    )
}