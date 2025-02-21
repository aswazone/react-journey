import Label from "./Label";



const ListItem = (props) => {

  return (
    <>
      <div className="list-item">
        <div className="list-title">
          <h4 className="fw-bold">{props.title}</h4>
        </div>
        <div className="list-desc">{props.desc}</div>
        <div className="list-label d-flex gap-2 py-2">
            <Label isActive={props.isActive}/>
        </div>
      </div>
    </>
  );
};

export default ListItem;