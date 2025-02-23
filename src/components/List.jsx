import { useCallback, useEffect, useMemo, useState } from "react";
import SimpleList from "./SimpleList";
import JustInfo from "./JustInfo";
import { LabelContext } from "../context/LabelContext";
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


const [label,setLabel] = useState(true)

const handleShowLabel = (e)=>{
  setLabel(e.target.checked)
} 


// //let try to pass object as props to JustInfo !

//     const keyPair = {
//       'key':'wow'
//     }

// // this makes uncontrolled re-render.. because of , in next re-render consider as it makes an another object.
// // object === object is false. because they comparing their references.
// //  so React.memo() consider that new key pair is passing from here !
// // for avoiding the problem ->  useMemo() 

const keyPair = useMemo(()=>{
  return {
          'key':'wow'
        }
},[])                                  //  same as early, its returns that keyPair when mount componets. 
                                      // working is like this --> first time dom nte element nte agath ingane value um oru dependency array um set cheyum -->   [keyPair , []]
                                     //  ini eppozhokke render aavunno appo check chayyum.. ippo verunna array === dom le array, same key thanne 
                                    // oru memoization pole returns cheyyum ! change indel puthiya value object kodukkum. appo render cheyyum

//----> dependeny array case:
//
//      const keyPair = useMemo(()=>{
//        return {
//                'key':'wow',
//                activeStatus:value                 // active status change cheyyunnafdhin anusarich useMemo return tharum, koode re- render cheyyum
//              }                                   // 
//      },[activeStatus])  


// similarlly -> below here referance issue for arrow function;
// for over come that using useMemo avoiding unconditional re-render

// const handleClick = useMemo(()=>{
//   return ()=> {
//     console.log('cliked !!')
//   }
// },[])

const handleClick = useCallback(()=> {                         //similarly to useMemo ,remove return, only function or callbacks handled by  useCallbacks()
  console.log('cliked !!')
},[])

                                    
  return (
    <>
    <LabelContext.Provider value={label}>
    <div className="bg-light p-2 m-2 border">
      <div className="d-flex align-items-center" >
        <input checked={label} onChange={handleShowLabel} type="checkbox" />
        <label >: Show label</label>
      </div>
      <Tools detectChange={detectChange}>
        <SimpleList onAction={handleLabelclick} data={newList} onDelete={handleDelete}/>
      </Tools>
      <JustInfo onAction={handleClick} keyPair={keyPair} status={value}/>
    </div>
    </LabelContext.Provider>
    </>
  );
};
export default List;