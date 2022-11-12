import React, {useState} from 'react';


export const UncontrolledInput =  ()=> {

    let[text,setText] = useState<string>('')

    return (
        <div>
            <input value={text}
            onChange={(e)=>{
             const actValue = e.currentTarget.value
             setText(actValue)
            }}
            />
        </div>
    )


}

