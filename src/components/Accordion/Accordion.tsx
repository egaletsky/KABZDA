import React from 'react';


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (state: boolean) => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={props.onClick}
                            collapsed={props.collapsed}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>)

}

/*function AccordionOld(props: AccordionPropsType) {

    if (!props.collapsed) {

        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>)

    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>)

    }


}*/

type AccordionTitlePropsType = {
    title: string
    onClick: (state: boolean) => void
    collapsed: boolean
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=>props.onClick(!props.collapsed)}>
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

export default Accordion;