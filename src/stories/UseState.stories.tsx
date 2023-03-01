import React, {useMemo, useState} from 'react';
import {number} from 'prop-types';

export default {
    title: 'Use State demo',

}

function generateData(){
    //difficult counting
    console.log('generationData')
    return 1
}


export const Example1 = () => {
    console.log('Example 1')

    const [counter, setCounter] = useState(generateData)

    const changer = (state:number)=> {
        debugger
        return state + 1
    }

    return (
        <>
            <button onClick={() => setCounter(changer)}>++</button>
            {counter}
        </>
    )

}