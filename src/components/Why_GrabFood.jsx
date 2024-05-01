export default function Why_GrabFood(props){
    return(
        <li className="list-image-[url(https://food.grab.com/static/images/tick.svg)] mt-3"><span className="font-bold">{props.title} </span> - {props.descriptions}</li>
    );
}