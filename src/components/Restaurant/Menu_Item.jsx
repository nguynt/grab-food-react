import { useState } from "react";
import Menu_Order from "../Menu_Order";
export default function Menu_Item(props){
    const [closeTab, setCloseTab] = useState(true);

    return(
        <>
            {/* <div onClick ={() => setCloseTab(!closeTab)} className={!closeTab ? 'bg-black/80 w-full h-screen z-112 fixed': undefined}></div> */}

              <div className={!closeTab ? 'menu max-sm:w-full w-[505px] h-full fixed top-0 z-10 right-0 bg-gray ':' w-[505px] max-sm:w-full h-full fixed top-0 z-0 left-[-100%] bg-gray '}>
                <div className=" fixed w-full bg-white p-5 m-[1px]">
                    <button onClick ={() => setCloseTab(!closeTab)}><img className="w-[20px]" src="https://static.thenounproject.com/png/53235-200.png"></img></button>
                </div>
                <Menu_Order {...props}></Menu_Order>
            </div>
            <div onClick ={() => setCloseTab(!closeTab) } className=" h-full min-h-[150px] cursor-pointer w-full bg-white p-5 pb-3 rounded-[10px] hover:border-green-grab hover:border-[1px] ">
            <div className="flex h-full">
                <img className="w-[120px] h-[110px] object-cover rounded-md" src={process.env.REACT_APP_LOCAL_HOST+props.img}></img>
                <div className="w-full">
                    <div className="w-full h-full flex flex-col  pl-4">
                        <div className="mb-auto w-full">
                            <h1 className="w-full">{props.name} ({props.price})</h1>
                            <p className="text-[#707070] text-[14px] mt-2">{props.description}</p>
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
        </>
       
    );
}