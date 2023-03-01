import React, {useCallback, useMemo, useState} from 'react';


export default {
    title: 'useMemo'

}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1

        for (let i = 1; i <= a; i++) {

            console.log(Date.now())
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            console.log(Date.now())
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return <>

        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>

        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>


    </>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('USERS SECRET')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>


}

const Users = React.memo(UsersSecret)

export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valers', 'Artem'])

    const newArray = useMemo(() => {
            return users.filter(u => u.toLowerCase().indexOf('a') > -1)
        },
        [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>++</button>
            <button onClick={() => addUser()}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )

}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'HTML'])


/*    const addBook = () => {
        const newBooks = [...books, 'Angulart ' + new Date().getTime()]
        setBooks(newBooks)
    }

    const memoizedAddBook = useMemo(()=>{
        return addBook
    }, [books])*/

    const memoizedAddBook = useCallback(()=>{
        const newBooks = [...books, 'Angulart ' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])



    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>++</button>
            {counter}
            <Book addBook={memoizedAddBook}/>
        </>
    )

}

type BooksSecretType = {
    addBook: () => void
}

const BooksSecret = (props:BooksSecretType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)