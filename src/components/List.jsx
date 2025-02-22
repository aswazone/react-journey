import { useEffect, useState } from "react";
import SimpleList from "./SimpleList";
import Tools from "./Tools";

const List = () => {

// fetching data from API as sideEffect ! 
// (simillar to 'componentDidMount' ~~> useEffect({...},[]))  , ex: fetch,loading..
// componentDidUpdate(prevProps,prevState)~~>, this workes actually in updating the components ,
//  there is a check , to avoid maximum exeed or break of code ;

  useEffect(()=>{
    console.log('mounted !!')
    fetch('/data.json')
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        // console.log(data)
        setItems(data)
      })

  },[])


  const [items,setItems] = useState([])
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