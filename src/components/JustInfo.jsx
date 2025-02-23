import { memo } from "react";

const JustInfo = ({status})=>{

  // project run cheyimbo , eppozhum ella componentneyum render cheyyikkyum react. - idhoru most effient method thanne aan.
  // but some time i want to control that re-render . so i use 'React.memo' feature in React;
  // React.memo() is HOC => Higher Order Components ;
  // Runs only in mount time . eni JustInfo lekki enthengilum state marunna oru props pass cheyyane ath re-render cheyyum change cheyinen anusarich.

  console.log('just info')
    return (
        <div className="border p-3 m-2">
          <h1>Just info : {status} data`s</h1>     
        </div>
    );
}



// export default JustInfo;
export default memo(JustInfo);