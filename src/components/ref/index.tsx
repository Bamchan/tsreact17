import React, { useEffect, useRef } from 'react';


export default function RefFunctionComponent() {
    const btn1Fn = (e:any) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(e);
    }
    const buttonElement = useRef<HTMLButtonElement>(null);
    const divElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log(buttonElement);
        if(buttonElement.current && divElement.current) {
            buttonElement.current.onclick = (e: any) => {
                // e.stopPropagation();
                e.preventDefault();
                console.log(e);
            }
            const button3 = document.createElement('button');
            divElement.current.appendChild(button3);
            button3.addEventListener('click', (e)=> {
                e.stopPropagation();
                console.log(3,e);
            })
            divElement.current.addEventListener('click', (e) => {
                console.log('div');
            }) 
        }
    }, [])
    return (
        <div ref={divElement}>
            <button onClick={btn1Fn}>button1</button>
            <button ref={buttonElement}>button2</button>
        </div>
    )
}