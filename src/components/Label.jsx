const Label = (props) => {

    const style = props.isActive ? 'bg-info' : 'bg-success'
    const status = props.isActive ? 'Active' : 'Inactive'

    return <span className={`${style} rounded px-2`} >{status}</span>
}

export default Label