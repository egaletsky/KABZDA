import React from 'react';


export type AccordionPropsType = {
    /**
     * Title of lists
     */
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}

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
    /**
     * Title of lists
     */
    title: string
    onChange: () => void

}


function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>
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
