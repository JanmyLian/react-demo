// 函数式编程
import React, { useEffect, useState } from "react";

const FunctionalComponent = ({number = 8}) => {
    const [data, setData] = useState({name: "wendy"})
    useEffect(()=>{
        const setT = setTimeout(()=>{
            setData({name: "janmy"})
        }, 1000)
        return () => {
            clearTimeout(setT)
        }
    }, [])

    const [email, setEmail] = useState("wendy@tc.com")
    useEffect(()=>{
        // 这里刚进入也会componentDidMount一下
        setEmail("56...@qq.com")
        console.log(email)
    },[data.name])

    useEffect(()=>{
        console.log('1')
        // componentDidMount + componentDidUpdate
        return () => {
            // ...这里写卸载组件时需要清除的操作/副作用
        }
    })
    useEffect(()=>{
        console.log('2')
        // componentDidMount
    },[])

    return (
        <div>
            <span>{number}</span>
            <br/>
            <span>{data.name}</span>
            <br/>
            {/* <span>{email}</span> */}
        </div>
    )
}
export default FunctionalComponent;
