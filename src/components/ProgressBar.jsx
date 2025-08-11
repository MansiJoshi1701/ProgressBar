import { useEffect, useState } from "react";

const ProgressBar = ({value}) => {

    //this logic is to keep the value between 0 & 100
    const [num , setNum] = useState(0);

    useEffect(() => {

        setNum(Math.min(100 , Math.max(0 , value)));
    } , [value]);


    return(
        <div className="progress">
            <span>{num.toFixed()}%</span>
            <div style={{ width: `${num}%` }} />
        </div>
    )

}

export default ProgressBar;