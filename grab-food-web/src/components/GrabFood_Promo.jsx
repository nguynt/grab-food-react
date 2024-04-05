export default function GrabFood_Promo(props){
    return(
     <a href="">
           <div className="xl:w-[280px] w-[170px] relative">
            <div className="absolute bg-green-grab p-[3px] text-[10px] text-white font-bold rounded-sm mt-4 px-2">
                    Promo
                </div>
            <img className="rounded-md" src={props.image}></img>
            <h1 className="font-bold text-xl mt-3">{props.name}</h1>
            <p className="text-[#707070] mt-4">{props.category}</p>
            <div className="flex text-[#707070] mt-1">
                
                <div className="flex">
                    <img width={23} src="https://food.grab.com/vn/en/static/images/icons/icon-star.svg"></img>
                    &nbsp;&nbsp;
                    <span>{props.rate}</span>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="flex">
                    <img src="https://food.grab.com/vn/en/static/images/icons/icon-clock.svg"></img>
                    &nbsp;&nbsp;
                    <span>{props.time}</span>
                    
                </div>
                &nbsp;&nbsp;&nbsp;
                <span> {props.location}</span>
       
            </div>
            <div className="flex justify-center">
                <img src="https://food.grab.com/vn/en/static/images/icons/icon-promo-tag.svg"></img>
                &nbsp;
                <span>{props.promo}</span>
            </div>
        </div>
     </a>
    );
}