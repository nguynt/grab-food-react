import { Link } from "react-router-dom";
export default function GrabFood_Promo(props){
    return(
     <Link to={`/restaurant/${props._id}`}>
           <div className="lg:w-[280px] md:w-[255px]  relative horizontal-scroll-item">
            <div className="absolute bg-green-grab p-[3px] text-[10px] text-white font-bold rounded-sm mt-4 px-2">
                    Promo
                </div>
            <img className="rounded-md max-sm:w-[215px] h-[165px] object-cover" src={process.env.REACT_APP_LOCAL_HOST+props.img}></img>
            <h1 className="font-bold text-sm lg:text-xl mt-3">{props.name}</h1>
            <p  className="max-sm:text-sm max-sm:mt-1 text-[#707070] mt-4">{props.description}</p>
            <div className="flex max-sm:text-sm max-[400px]:text-[10px] text-[#707070] mt-1">
                
                <div className="flex">
                    <img width={23} className="max-sm:w-[18px]" src="https://food.grab.com/vn/en/static/images/icons/icon-star.svg"></img>
                    &nbsp;&nbsp;
                    <span>{props.rate}</span>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="flex">
                    <img className="max-sm:w-[18px]" src="https://food.grab.com/vn/en/static/images/icons/icon-clock.svg"></img>
                    &nbsp;&nbsp;
                    <span>{props. timeDelivery} mins</span>
                    
                </div>
                &nbsp;&nbsp;&nbsp;
                <span> 7kms </span>
       
            </div>
            <div className="flex max-sm:text-sm justify-center max-[400px]:text-[12px]">
                <img className="max-sm:w-[18px]" src="https://food.grab.com/vn/en/static/images/icons/icon-promo-tag.svg"></img>
                &nbsp;
                <span>🔥50K off, Combo Trưa Chỉ 40K</span>
            </div>
        </div>
     </Link>
    );
}
