export default function Menu_Item(props){
    return(
        <div className=" h-full cursor-pointer w-full bg-white p-5 pb-3 rounded-[10px] hover:border-green-grab hover:border-[1px] ">
            <div className="flex h-full">
                <img className="w-26 h-28" src={props.proImg}></img>
                <div className="w-full">
                    <div className="w-full h-full flex flex-col  pl-4">
                        <div className="mb-auto w-full">
                            <h1 className="w-full">{props.proName} ({props.quantity})</h1>
                            <p className="text-[#707070] text-[14px] mt-2">{props.descriptions}</p>
                        </div>
                        <div className="flex w-full mt-3">
                            <p className="font-bold text-[16px]">{props.price}</p>
                            <div className="rounded-full ml-auto bg-green-grab w-8 h-8 flex justify-center items-center">
                                <img src="https://food.grab.com/static/images/quick-add/plus-white.svg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}