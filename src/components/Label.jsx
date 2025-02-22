import { useContext } from "react";
import { LabelContext } from "../context/LabelContext";


const Label = (props) => {
    const isChecked = useContext(LabelContext)
    const style = props.isActive ? 'bg-info' : 'bg-success'

    if(isChecked === false){
        return;
    }
    return <span onClick={()=>props.onAction(props.isActive ? 'Active' : 'Inactive')} className={`${style} rounded px-2`} >{props.isActive ? 'Active' : 'Inactive'}</span>
}

export default Label;