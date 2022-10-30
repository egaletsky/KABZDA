import React, {useState} from 'react';

type RatingPropsType = {}

export function UncontrolledRating(props: RatingPropsType) {

    let [stars, setStars] = useState<number>(1)


    return (
        <div>
            <Star selected={stars > 0} setStars ={setStars} value={1}/>
            <Star selected={stars > 1} setStars ={setStars} value={2}/>
            <Star selected={stars > 2} setStars ={setStars} value={3}/>
            <Star selected={stars > 3} setStars ={setStars} value={4}/>
            <Star selected={stars > 4} setStars ={setStars} value={5}/>

        </div>);

}

type StarPropsType = {
    selected: boolean
    value: 1|2|3|4|5
    setStars: (value: 1|2|3|4|5 )=>void
}

function Star(props: StarPropsType) {

    return <span onClick={()=>props.setStars(props.value)}>
        {props.selected ? <b>star </b> : 'star '}
    </span>

}