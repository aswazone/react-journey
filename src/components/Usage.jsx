import { useState } from "react";

const Usage = () => {

    const [count, setCount] = useState(0)
    const [bgColor, setBgColor] = useState('bg-light')
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
    </>
  );
};

export default Usage;
