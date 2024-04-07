export default function Form_Location(props){
    return(
        <a href="/grab-food-react/#/searchRes">
            <div  className="w-full h-full">
            <img loading="lazy" className="rounded-lg md:max-h-[175px] md:max-w-[100%] max-w-[100%] max-h-[140px]" src={props.image}></img>
            <h3 className="font-bold mt-2 text-md">{props.name}</h3>
        </div>
        </a>
    );
}
