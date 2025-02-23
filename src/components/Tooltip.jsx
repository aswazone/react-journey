import React from "react";

const Tooltip = (props,ref) =>{
    return (
        <>
            <label ref={ref} className={`shadow-sm border px-1 ${props.tooltip ? "show" : "fade"}`}>
                {`This is ${props.isActive ? "Active" : "Inactive"} tooltip !`}
            </label>
        </>
    );
}

export default React.forwardRef(Tooltip);

//forward Ref concept => sending reference from parent to child; but getting of dom element property is from vise versa;

// useImperativeHandle()  --->  we set callbacks as props from child to parent, but using this hook we can calls to child from parent;