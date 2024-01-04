import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"
import "bulma/css/bulma.css"

function Acordeon({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(2)

    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex

        const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>


        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray" onClick={() => setExpandedIndex(index)}>
                    {icon}
                    {item.label}
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>

        )
    })

    return <div>{renderedItems}</div>

}



export default Acordeon