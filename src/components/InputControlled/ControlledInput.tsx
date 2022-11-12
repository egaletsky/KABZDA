import React from 'react';

export type ControlledInputType = {
    text:string
}

export const ControlledInput =  (props: ControlledInputType)=> {

    return (
        <div>
            <input value={props.text}/>
        </div>
    )


}

