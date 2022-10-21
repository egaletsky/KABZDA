import React from 'react';


type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

function Accordion(props: AccordionPropsType) {

       return(
        <div>
            <AccordionTitle title={props.titleValue}/>
            { !props.collapsed && <AccordionBody/>}
        </div>)

}

function AccordionOld(props: AccordionPropsType) {

    if (!props.collapsed) {

        return(
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>)

    } else
    {
        return(
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>)

    }


}

type AccordionTitlePropsType = {
    title: string
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>-- {props.title} --</h3>;
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