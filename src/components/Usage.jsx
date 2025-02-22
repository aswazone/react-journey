import { useEffect, useState } from "react";

const Usage = () => {

    const [count, setCount] = useState(0)
    const [bgColor, setBgColor] = useState('bg-light')

    const [boom , setBoom] = useState(false);

    // //------------- useEffect -------------------------

    useEffect(()=> {
        setBoom(false)
        const timer = setTimeout(()=>{
            setBoom(true)                    // example for Cleanup in useEffect
        },count * 1000)
                                            // in the time of count changes
        return () => {                      // starts the timer related to count    
            clearTimeout(timer);            // when i change count , it clean up before timer;
        }
    },[count]);


    // //always render
    // useEffect(()=>{
    //     console.log('inside useEffect !!')
    // })

    // //always render
    // useEffect(()=>{
    //     console.log('inside useEffect !!') //only in the time of mount and unmount
    // },[])
    
    // useEffect(()=>{
    //     console.log('inside useEffect !!-count')  //changes only detects when the 'count' changes correspondingly
    // },[count])
    

    // useEffect(()=>{
    //     console.log('inside useEffect !!')

    //     return ()=>{
    //         console.log('clean up' + count) //generely we use this to clean up function.
    //         //it make sure that recent value is changed and cleaned up !
    //     }
    // })

    // useEffect(()=>{
    //     console.log('inside useEffect !!-count')  //changes only detects when the 'count' changes correspondingly
        
    //     return ()=>{
    //         console.log('clean up' + count) //generely we use this to clean up function.
    //         //it make sure that recent value is changed and cleaned up !
    //     }

    // },[count])




  return (
    <>
      <h1 className="p-3"> Usage !!</h1>

      <div className="container d-flex m-2">
        <div className="">
          <div className={`d-flex flex-column text-center ${bgColor} p-4 border rounded-start`}>
            <button className="btn btn-dark" onClick={()=>setCount(count+1)}>Increment</button>
            <label className="fs-1 m-2">{count}</label>
            <button className="btn btn-dark" onClick={()=>setCount(count-1)}>Decrement</button>
          </div>
        </div>
        <button className="bg-light p-4 border" onClick={()=>setBgColor('bg-success')}>green</button>
        <button className="bg-light p-4 border rounded-end" onClick={()=>setBgColor('bg-danger')}>red</button>
      </div>



      
        {boom && count ? <h1 className="bg-dark text-white p-4">Boom !!</h1> : null}
    </>
  );
};

export default Usage;
