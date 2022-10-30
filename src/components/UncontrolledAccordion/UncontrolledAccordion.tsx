import React, {useState} from 'react';
import {RatingValueType} from '../Rating/Rating';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                onClick={() => {
                    setCollapsed(!collapsed)
                }}

            />
            {/*<button onClick={() => {*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}}>TOGGLE*/}
            {/*</button>*/}

            {!collapsed && <AccordionBody/>}
        </div>)

}


type AccordionTitlePropsType = {
    title: string
    onClick:()=> void

}


function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=>props.onClick()}>
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