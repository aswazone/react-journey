import { useContext, useMemo, useRef, useState } from "react";
import Tooltip from "./Tooltip";
import { LabelContext } from "../context/LabelContext";

const Label = (props) => {
  const [tooltip, setToolTip] = useState(false);
  const isChecked = useContext(LabelContext);
  const style = props.isActive ? "bg-info" : "bg-success";

  const labelRef = useRef();

//   const refObj = useMemo((domElem)=>{
//     return ()=>{
//         console.log(domElem)
//     }
//   },[])
                                                            // we can write in this to methods also !! we will get dom directly;
//   const refObj = useCallback((domElem)=>{
//     console.log(domElem);
//   },[])



  const handleMouseEnter = (e) => {
    // console.log(e.target)
    // console.log(e.target.getBoundingClientRect().width)

    const width1 = e.target.getBoundingClientRect().width;
    const width2 = labelRef.current.getBoundingClientRect().width;

    labelRef.current.style.left = `${-(width2 - width1)/2}px`

    console.log(width1,width2)

    setToolTip(true)
  }
  const handleMouseLeave = () => {
    setToolTip(false)
  }

  if (isChecked === false) {
    return;
  }

  return (
    <>
      <span
        onClick={() => props.onAction(props.isActive ? "Active" : "Inactive")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${style} rounded px-2`}
      >
        {props.isActive ? "Active" : "Inactive"}
      </span>
      <Tooltip ref={labelRef} tooltip={tooltip} isActive={props.isActive}/>
    </>
  );
};

export default Label;
