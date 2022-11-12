import React from 'react';


export type AccordionPropsType = {
    /**
     * Title of lists
     */
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items:string[]

}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}

            />
            {!props.collapsed && <AccordionBody items ={props.items}/>}
        </div>)

}



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


type AccordionBodyPropsType = {
    items:string[]
}

function AccordionBody(props:AccordionBodyPropsType) {
    return <ul>
        {props.items.map(el =>{
            return <li>{el}</li>
        })}
    </ul>;
}
