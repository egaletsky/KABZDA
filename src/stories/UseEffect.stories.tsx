import React, {useEffect, useMemo, useState} from 'react';
import {number} from 'prop-types';

export default {
    title: 'Use Effect demo',

}



export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')


    useEffect(()=>{
        console.log('UseEffect')
        window.alert(counter.toString())
    })

    useEffect(()=>{
        console.log('UseEffect only first render didmount')
        window.alert(counter.toString())
    }, [])

    useEffect(()=>{
        console.log('UseEffect first render and every counter change')
        window.alert(counter.toString())
    },[counter])


    return (
        <>
            Hello, {counter}
            <button onClick={() => setFake(fake + 1)}>fake++</button>
            <button onClick={() => setCounter(counter + 1)}>counter++</button>
        </>
    )

}

export const SetTimeoutExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExample')


    // useEffect(()=>{
    //     console.log('UseEffect')
    //     window.alert(counter.toString())
    // })
    //
    // useEffect(()=>{
    //     console.log('UseEffect only first render didmount')
    //     window.alert(counter.toString())
    // }, [])
    //
    // useEffect(()=>{
    //     console.log('UseEffect first render and every counter change')
    //     window.alert(counter.toString())
    // },[counter])
     useEffect(()=> {
         setInterval(() => {
             setCounter((state)=>state + 1)
         }, 1000)
     },[])

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
            {/*<button onClick={() => setFake(fake + 1)}>fake++</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter++</button>*/}
        </>
    )

}