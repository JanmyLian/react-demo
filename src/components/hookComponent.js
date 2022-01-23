import React, {Component, useState} from 'react'
// class stateClass extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             number: 0
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <span>{this.state.number}</span>
//                 <button onClick={()=>this.setState({number: 1})}>click me</button>
//             </div>
//         )
//     }
// }
// export default stateClass;

function hookState () {
    const [number, setNumber] = useState(0)
    return(
        <div>
            <span>{number}</span>
            <button onClick={()=>{setNumber(number + 1)}}>click me</button>
        </div>
    )
}