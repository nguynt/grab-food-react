export default function Info(props){
    return(
        <div className="w-full mt-[100px]">
           
            <h1 className="font-bold text-4xl mt-3">{props.name}</h1>
            <p className="text-[#707070] mt-4">{props.category}</p>
            <div className="flex text-[#707070] mt-2">
                
                <div className="flex ">
                    <img width={18} src="https://food.grab.com/vn/en/static/images/icons/icon-star.svg"></img>
                    &nbsp;&nbsp;
                    <span>{props.rate}</span>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="flex">
                    <img src="https://food.grab.com/vn/en/static/images/icons/icon-clock.svg"></img>
                    &nbsp;&nbsp;
                    <span>{props.time}</span>
                    
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span> {props.location}</span>
       
            </div>
            <div><span className="text-[15px]">Opening Hours</span>  &nbsp;&nbsp; <span className="text-[15px] text-[#707070]">Today  00:00-23:59</span></div>
            <div className="flex mt-2">
                <img src="https://food.grab.com/vn/en/static/images/icons/icon-promo-tag.svg"></img>
                &nbsp;
                <span>{props.promo}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="" className="text-[#00A5CF]">See details</a>
            </div>
        </div>
    );
}