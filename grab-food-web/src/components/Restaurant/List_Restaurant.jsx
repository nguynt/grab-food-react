export default function ListRestaurant(props){
    return(
     <a href="/grab-food-react/#/restaurant">
           <div className="w-[100%] relative max-sm:flex  ">
            <div className="absolute bg-green-grab p-[3px] text-[10px] text-white font-bold rounded-sm max-sm:mt-2 mt-4 px-2">
                    Promo
                </div>
            <div className="">
                <img className="h-[160px] object-cover rounded-md max-sm:w-[100px] max-sm:h-[100px] max-[400px]:w-[90px] max-[400px]:h-[90px] max-[400px]:object-cover max-sm:object-cover w-[100%] " src={props.image}></img>
            </div>
            <div className="max-sm:pl-4 pt-0">
                <h1 className="font-bold text-lg mt-3  max-sm:text-sm max-sm:mt-0">{props.name}</h1>
                <p className="max-sm:h-[20px] overflow-hidden text-ellipsis text-[#707070] text-sm mb-2 mt-3 max-sm:mt-0 max-sm:text-sm">{props.category}</p>
                <div className="flex text-[#707070] text-sm mt-1 max-sm:text-sm">
                    <div className="flex">
                        <img width={23} className="max-sm:w-[15px]" src="https://food.grab.com/vn/en/static/images/icons/icon-star.svg"></img>
                        &nbsp;&nbsp;
                        <span>{props.rate}</span>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div className="flex">
                        <img className="max-sm:w-[15px]" src="https://food.grab.com/vn/en/static/images/icons/icon-clock.svg"></img>
                        &nbsp;&nbsp;
                        <span>{props.time}</span>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <span> {props.location}</span>      
                </div>
                <div className="flex justify-center text-sm">

                    <img className="max-sm:w-[15px]" src="https://food.grab.com/vn/en/static/images/icons/icon-promo-tag.svg"></img>
                    &nbsp;
                    <span>{props.promo}</span>
                </div>
            </div>
        </div>
     </a>
    );
}
