import React,{Component} from "react";
import Child from "./Child";

class Parent extends Component{
    render(){
        return(
            <div>
                
                <Child dataFromParent = " Passing props in Class Component"/>
            </div>
        )
    }
}

export default Parent;