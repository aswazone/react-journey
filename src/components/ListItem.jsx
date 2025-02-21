import Label from "./Label";



const ListItem = () => {

    
  return (
    <>
      <div className="list-item">
        <div className="list-title">
          <h4>My title 1</h4>
        </div>
        <div className="list-desc">This is a very big decriptions</div>
        <div className="list-label d-flex gap-2 py-2">
            <Label />
            <Label />
            <Label />
            <Label />
        </div>
      </div>
    </>
  );
};

export default ListItem;