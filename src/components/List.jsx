import { useState } from "react";
import ListItem from "./ListItem";
import Tools from "./Tools";

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


  const [items,setItems] = useState(arr)

  const detectChange = (e) =>{
    console.log(e.target.value)
    const value = e.target.value

    const newList = arr.filter(data => {
        if(value === 'All') {
            return true;
        }
        if(value === 'Active'){
           return data.isActive === true;
        }
        if(value === 'Inactive'){
           return data.isActive === false;
        }
        return false;
    })

    console.log(newList)
    setItems(newList);

  }

  return (
    <>
    <Tools detectChange={detectChange}>
      {items.map((item) => {
       return(
        <div key={item.title} className="app-list bg-light">
          <ListItem title={item.title} desc={item.desc} isActive={item.isActive} />
        </div>
       ); 
      })}
    </Tools>
    </>
  );
};
export default List;
