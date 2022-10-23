import React, {useState} from 'react';

type RatingPropsType = {

}

export function UncontrolledRating(props:RatingPropsType) {

    let [stars, setStars] = useState<number>(5)


    return (
        <div>
            <Star selected={stars > 0}/><button onClick={()=>setStars(1) }>1</button>
            <Star selected={stars > 1}/><button onClick={()=>setStars(2) }>2</button>
            <Star selected={stars > 2}/><button onClick={()=>setStars(3) }>3</button>
            <Star selected={stars > 3}/><button onClick={()=>setStars(4) }>4</button>
            <Star selected={stars > 4}/><button onClick={()=>setStars(5) }>5</button>

        </div>);

}

type StarPropsType ={
    selected:boolean
}
function Star(props: StarPropsType) {

    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }


}