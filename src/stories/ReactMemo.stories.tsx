export default {
    title: 'React memo demo',

}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const Users = (props: { users: string[] }) => {
    return <div>{props.users.map((u, i) => <div>{u}</div>)}</div>
}

export const Example1 = () => {
    return (
        <>
            <NewMessagesCounter count={10}/>
            <Users users={['Dimych', 'Valers', 'Artem']}/>
        </>
    )

}