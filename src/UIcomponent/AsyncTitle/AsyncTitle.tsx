import React, {useState, useEffect} from "react"
export const AsyncTitle = () => {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const loadUser = async () => {
            await "simulate a promise"
            setUser("wendy")
        }
        loadUser()
    })
    return user && <h1>hello {user}</h1>
}