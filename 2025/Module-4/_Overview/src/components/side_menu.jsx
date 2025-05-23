import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";





export default function SideMenu({ data, onSelection, selected }) {

    useEffect(() => {
        Prism.highlightAll();
    }, [selected, data, onSelection]);

    return (
        <div className="card w-[300px] h-[300px] bg-slate-300 round-l-none shadow-sm">
            <div className="card-body">
                <ul className="">
                    {data.map((item, i) => (
                        <li key={i} onClick={() => onSelection(item)} className={`cursor-pointer hover:text-blue-500 text-xs ${selected === item ? "text-orange-500" : ""}`}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}