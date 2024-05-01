import { Link } from "react-router-dom";

export default function ListRestaurant(props){
    console.log(process.env)

    return(
     <Link to={`/restaurant/${props._id}`}>
           <div className="w-[100%] relative max-sm:flex  ">
            <div className="absolute bg-green-grab p-[3px] text-[10px] text-white font-bold rounded-sm max-sm:mt-2 mt-4 px-2">
                    Promo
                </div>
            <div className="">
                <img className="rounded-md max-sm:w-[120px]" src={process.env.REACT_APP_LOCAL_HOST+props.img} ></img>
            </div>
            <div className="max-sm:pl-4 pt-0">
                <h1 className="font-bold text-lg mt-3  max-sm:text-sm max-sm:mt-0">{props.name}</h1>
                <p className="max-sm:h-[20px] overflow-hidden text-ellipsis text-[#707070] text-sm mb-2 mt-3 max-sm:mt-0 max-sm:text-sm">{props.description}</p>
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
                        <span>{props.timeDelivery} mins</span>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <span> </span>      
                </div>
                <div className="flex justify-center text-sm">

                    <img className="max-sm:w-[15px]" src="https://food.grab.com/vn/en/static/images/icons/icon-promo-tag.svg"></img>
                    &nbsp;
                    <span>{props.promo}</span>
                </div>
            </div>
        </div>
     </Link>
    );
}
