import React from "react";
import ChildFn from "./ChildFn";

const ParentFn = () => {
    return(
        <div>
            <ChildFn dataFromParent = " Passing props in Functional Component"/>
        </div>
    )
}

export default ParentFn;