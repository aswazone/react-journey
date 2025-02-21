import Label from "./Label";



const ListItem = ({title,desc,isActive}) => {

  return (
    <>
      <div className="list-item">
        <div className="list-title">
          <h4 className="fw-bold">{title}</h4>
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