import Label from "./Label";




const ListItem = ({title,desc,isActive, onDelete ,onAction}) => {


 

  return (
    <>
      <div className="list-item">
        <div className="list-title d-flex justify-content-between">
          <h4 className="fw-bold">{title}</h4>
          <button onClick={onDelete} className="btn btn-sm btn-warning ">Delete</button>
        </div>
        <div className="list-desc">{desc}</div>
        <div className="list-label d-flex gap-2 py-2">
            <Label isActive={isActive} onAction={onAction}/>
        </div>

        
      </div>
    </>
  );
};

export default ListItem;