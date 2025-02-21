import ListItem from "./ListItem";

const List = () => {
  const arr = [
    {
      title: "Meeting with Team",
      desc: "Discuss project milestones and deadlines",
      isActive: true,
    },
    {
      title: "Doctor's Appointment",
      desc: "Annual health check-up",
      isActive: false,
    },
    {
      title: "Grocery Shopping",
      desc: "Buy vegetables and fruits",
      isActive: true,
    },
    {
      title: "Workout Session",
      desc: "Gym workout for 1 hour",
      isActive: false,
    },
  ];

  return (
    <>
      {arr.map((item) => {
       return(
        <div key={item.title} className="app-list">
          <ListItem title={item.title} desc={item.desc} isActive={item.isActive} />
        </div>
       ); 
      })}
    </>
  );
};
export default List;
