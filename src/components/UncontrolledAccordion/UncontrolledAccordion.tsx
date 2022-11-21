import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './Reducer';

type UncontrolledAccordionPropsType = {
    titleValue: string
}


function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    //const [collapsed, setCollapsed] = useState<boolean>(true)
    const [state, dispatch] = useReducer(reducer, {collapsed:true})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}*/}
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}
            />
            {!state.collapsed && <AccordionBody/>}
        </div>)

}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void

}


function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onClick()}>
        -- {props.title} --
    </h3>;
}

function AccordionBody() {
    return <ul>

        <li>1 element</li>
        <li>2 element</li>
        <li>3 element</li>
        <li>4 element</li>
        <li>5 element</li>

    </ul>;
}

export default UncontrolledAccordion;