const Label = (props) => {

    const style = props.isActive ? 'bg-info' : 'bg-success'

    return <span onClick={()=>props.onAction(props.isActive ? 'Active' : 'Inactive')} className={`${style} rounded px-2`} >{props.isActive ? 'Active' : 'Inactive'}</span>
}

export default Label;