const Tools = (props) => {

  return (
    <>
      <div className="p-3 ">
        <div className="wrapper">
          <select onChange={props.detectChange} name="status" id="status">
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        {props.children}

      <div>
        Total {props.children.length} items
      </div>
      </div>
    </>
  );
};

export default Tools;
