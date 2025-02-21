import { useState } from "react";
import SimpleList from "./SimpleList";
import Tools from "./Tools";

const List = () => {

  const arr = [
    {
      id:1,
      title: "Meeting with Team",
      desc: "Discuss project milestones and deadlines",
      isActive: true,
    },
    {
      id:2,
      title: "Doctor's Appointment",
      desc: "Annual health check-up",
      isActive: false,
    },
    {
      id:3,
      title: "Grocery Shopping",
      desc: "Buy vegetables and fruits",
      isActive: true,
    },
    {
      id:4,
      title: "Workout Session",
      desc: "Gym workout for 1 hour",
      isActive: false,
    },
  ];


  const [items,setItems] = useState(arr)
  const [value,setValue] = useState('All')

  const detectChange = (e) =>{
    
    // console.log(e.target.value)
    const value = e.target.value
    setValue(value);

  }

  const handleDelete = (id) => {
    const newItemsList = items.filter(item => item.id !== id);
    setItems(newItemsList);
  }

  const handleLabelclick = (status) =>{
    setValue(status)
    // console.log(status)
  }

  //more convenient way of code writing
//   code is the better approach because: ✅ It keeps the original list (arr) immutable.
// ✅ Avoids unnecessary state updates, making it more performant.
// ✅ Ensures that filtering happens only when rendering, without modifying the original data.
// ✅ Less complexity and easier to debug.

  const newList = items.filter(data => {
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


  return (
    <>
    <Tools detectChange={detectChange}>
      <SimpleList onAction={handleLabelclick} data={newList} onDelete={handleDelete}/>
    </Tools>
    </>
  );
};
export default List;