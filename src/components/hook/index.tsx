import React, { useEffect, useState } from 'react';

export default function Hook() {
    const [data, setData] = useState(0);
    const [data2, setData2] = useState(0);

    console.log('render ');
    
    const clickFn = () => {
        // example 1
        // setTimeout(() => {
        //     setData(data + 1);
        // }, 0)
        // setData2(data2 => data2 + 1);

        // example 2
        // Promise.resolve().then(() => {
        //     setData(data + 1);
        // })
        setData2(data2 => data2 + 1);

        
        // example 3
        // setData(data + 1);
        // setData2(data2 => data2 + 1);

        setData2(data2 => data2 + 1);
    }
    return (
        <>
        <div>
            data1: {data}
            data2: {data2}
        </div>
        <button onClick={() => clickFn()}>
            hello
        </button>
        </>
    )
}