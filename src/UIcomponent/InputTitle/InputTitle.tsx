import React, { useState } from "react"
export const InputTitle = () => {
    const [head, setHead] = useState("")
    return (
        <div>
            <h3>{head}</h3>
            <input
                type="text"
                value={head}
                onChange={(e) => setHead(e.target.value)}
            />
        </div>
    )
}