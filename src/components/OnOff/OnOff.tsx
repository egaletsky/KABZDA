import React, {useState} from 'react';

type PropsType = {
    //on: boolean
}

const onStyle = {}

export const OnOff = (props: PropsType) => {


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

    return (
        <div>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>ON
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

