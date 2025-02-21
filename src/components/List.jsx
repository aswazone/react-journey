import ListItem from "./ListItem";

const List = () => {
  const obj = {
    title: "Appointment for October",
    desc: "The patient is rescheduled to october",
    isActive: true,
  };

  return (
    <>
      <div className="app-list">
        <ListItem title={obj.title} desc={obj.desc} isActive={obj.isActive}/>
      </div>
    </>
  );
};
export default List;
