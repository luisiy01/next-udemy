import { IoCafeOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";


export const WidgetsGrid = () => {
    return (
        <div className="flex flex-wrap p2 items-center justify-center">
            <SimpleWidget
                title="Contador"
                subtitle="Subtitulo"
                label="Label"
                icon={<IoCafeOutline size={50} />}
                value="10"
                href="#"
            />
        </div>
    )
}