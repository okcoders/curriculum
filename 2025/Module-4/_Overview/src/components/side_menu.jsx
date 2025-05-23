import day2Data from "@/cardData/day2Data"





export default function SideMenu({ data, onSelection }) {



    return (
        <div className="card w-[300px] h-[300px] shadow-sm">
            <div className="card-body">
                <ul>
                    {data.map((item, i) => (
                        <li key={i} onClick={onSelection}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}