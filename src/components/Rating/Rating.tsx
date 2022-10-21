import React from "react";

type RatingPropsType = {
    stars: 0|1|2|3|4|5;
}

export function Rating(props:RatingPropsType) {
   debugger



    return (
        <div>
            <Star selected={props.stars > 0}/>
            <Star selected={props.stars > 1}/>
            <Star selected={props.stars > 2}/>
            <Star selected={props.stars > 3}/>
            <Star selected={props.stars > 4}/>

        </div>);

}

type StarPropsType ={
    selected:boolean
}
function Star(props: StarPropsType) {
debugger
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }


}