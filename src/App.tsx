import React, {useState} from 'react';
import './App.css';
import './components/Accordion/Accordion';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';


function App() {


    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

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



            <OnOff></OnOff>
            <OnOff></OnOff>
            <OnOff></OnOff>
            <Accordion titleValue = {'Menu'}
                       collapsed = {accordionCollapsed}
                       onClick={setAccordionCollapsed}
            />
            <UncontrolledAccordion titleValue = {'Menu'}/>
            <UncontrolledAccordion titleValue = {'Users'}/>
            <UncontrolledRating/>

            <Rating stars={ratingValue} onClick={setRatingValue}/>


        </div>
    );
}
type PageTitleProps ={
    title:string
}

function PageTitle(props: PageTitleProps) {
    return (
        <h1>{props.title}</h1>


    );
}



export default App;
