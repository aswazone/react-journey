import Label from "./Label";



const ListItem = ({title,desc,isActive, onDelete}) => {

  return (
    <>
      <div className="list-item">
        <div className="list-title d-flex justify-content-between">
          <h4 className="fw-bold">{title}</h4>
          <button onClick={()=>onDelete(title)} className="btn btn-sm btn-warning ">Delete</button>
        </div>
        <div className="list-desc">{desc}</div>
        <div className="list-label d-flex gap-2 py-2">
            <Label isActive={isActive} onAction={()=> console.log('Parent clicked !!')}/>
        </div>
      </div>
    </>
  );
};

export default ListItem;