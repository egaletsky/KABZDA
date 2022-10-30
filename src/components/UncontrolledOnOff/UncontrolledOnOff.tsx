import React, {useState} from 'react';

type PropsType = {
    onChange:(on:boolean)=>void
}

const onStyle = {}

export const UncontrolledOnOff = (props: PropsType) => {


    const [on, setOn] = useState<boolean>(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '5px',
        padding: '2px',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        marginLeft: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = ()=>{
        setOn(true)
        props.onChange(true)
    }

    const offClicked = ()=>{
        setOn(false)
        props.onChange(false)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClicked}>ON</div>
            <div style={offStyle} onClick={offClicked}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

