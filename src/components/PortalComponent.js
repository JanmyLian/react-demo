import React, { Component, useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom'
function WrapComponent({children}){
    const domRef = useRef(null)
    const [PortalComponent, setPortalComponent] = useState(null)
    useEffect(()=>{
        setPortalComponent(ReactDOM.createPortal(children, domRef.current))
    }, [])
    return(
        <div>
            <div className="container" ref={domRef}></div>
            {PortalComponent}
        </div>
    )
}
class PortalComponent extends Component{
    render(){
        return(
            <div style={{ marginTop:'50px' }}>
                <WrapComponent>
                    <div>hello world</div>
                </WrapComponent>
            </div>
        )
    }
}
export default PortalComponent;