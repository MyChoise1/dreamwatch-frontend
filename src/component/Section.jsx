import { useContext } from "react";
import DisplayContext from "./State/Context";

export default function Section({children, ...props}) {
    const display = useContext(DisplayContext)

    return <section className={display.show ? "bg-slate-300" : "bg-gray-900"} {...props}>
        {children}
        </section>
    
}