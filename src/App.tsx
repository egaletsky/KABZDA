import React, {useState} from 'react';
import './App.css';


import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {Accordion} from './components/Accordion/Accordion';


function App() {


    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    let [menuItems, setMenuItems] = useState<string[]>(['qqqq','aaaa','zzzz'])
    return (
        <div className="App">

            {/*            <PageTitle title ={'Hello, samurai!'}/>
         Article 1
            <Rating stars ={3}/>
          Article 222
            <Accordion titleValue = {'Menu'} collapsed = {true}/>
            <Accordion titleValue = {'Users'} collapsed = {false}/>
            <Rating stars ={0}/>
            <Rating stars ={1}/>
            <Rating stars ={2}/>
            <Rating stars ={3}/>
            <Rating stars ={4}/>
            <Rating stars ={5}/>*/}


            {/*<OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}} ></OnOff>*/}
            <UncontrolledOnOff onChange ={setSwitchOn}/>{switchOn.toString()}

            {/*<OnOff></OnOff>*/}
            {/*<OnOff></OnOff>*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Accordion titleValue={'MenuOne'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items ={menuItems}
            />
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>

            <Rating stars={ratingValue} onClick={setRatingValue}/>


        </div>
    );
}

type PageTitleProps = {
    title: string
}

function PageTitle(props: PageTitleProps) {
    return (
        <h1>{props.title}</h1>


    );
}


export default App;
