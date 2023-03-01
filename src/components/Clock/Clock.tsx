import React, {useEffect, useState} from 'react';


export type ClockPropsType = {

}


export const Clock: React.FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            console.log('TICK')
            setDate(new Date())
        },1000)

        return () => { clearInterval(intervalID)}

    },[])

    return <div>
        <span>{date.getHours()}</span>
        :
        <span>{date.getMinutes()}</span>
        :
        <span>{date.getSeconds()}</span>
    </div>
}