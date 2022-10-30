import React, {useState} from 'react';

type RatingPropsType = {}

export function UncontrolledRating(props: RatingPropsType) {

    let [stars, setStars] = useState<number>(1)


    return (
        <div>
            <Star selected={stars > 0} setStars ={()=>{setStars(1)}}/>
            <Star selected={stars > 1} setStars ={()=>{setStars(2)}}/>
            <Star selected={stars > 2} setStars ={()=>{setStars(3)}}/>
            <Star selected={stars > 3} setStars ={()=>{setStars(4)}}/>
            <Star selected={stars > 4} setStars ={()=>{setStars(5)}}/>

        </div>);

}

type StarPropsType = {
    selected: boolean
    setStars: ()=>void
}

function Star(props: StarPropsType) {

    return <span onClick={()=>props.setStars()}>
        {props.selected ? <b>star </b> : 'star '}
    </span>

}