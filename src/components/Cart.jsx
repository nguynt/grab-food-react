import { useState } from "react";

export default function Cart(){
    const [closeTab, setCloseTab] = useState(true);
    return (
        <>
            <div onClick ={() => setCloseTab(!closeTab)} className={closeTab ? 'bg-black/80 w-full h-screen z-10 fixed': undefined}></div>
            <div className={closeTab ? 'menu max-sm:w-full w-[505px] h-full fixed top-0 z-10 right-0 bg-gray ':' w-[505px] max-sm:w-full h-full fixed top-0 z-0 left-[-100%] bg-gray '}>
                <div className=" fixed w-full flex items-center bg-white pl-4 pb-2 m-[1px]">
                    <button className="absolute" onClick ={() => setCloseTab(!closeTab)}><img className="w-[20px]" src="https://static.thenounproject.com/png/53235-200.png"></img></button>
                    <div className="w-full  flex justify-center">
                        <div className="text-center">
                            <h1 className="font-bold text-md">
                                Basket
                            </h1>
                            <div className="flex  text-sm items-center">
                                <img width={18} src='https://food.grab.com/vn/en/static/images/icons/icon-clock.svg'></img>
                                Delivery time: 25 min (3.7 km away)
                            </div> 
                        </div>
                      
                    </div>
                </div>
                <div className="mt-[54px] w-full bg-white">
                    <h1 className="p-4 text-lg font-bold">Kin Pizza ( New York Style) - District 1</h1>
                    <div className="overflow-auto h-full p-4 ">
                        <Item_Dish></Item_Dish>
                        <Item_Dish></Item_Dish>
                  
                    </div>
                </div>
                <div className="w-full bg-white p-4">
                    <div className="flex text-md mb-4 w-full my-0">
                        <h1>Subtotal</h1>
                        <span className="ml-auto">152.100 ₫</span>
                    </div>
                    <h1 className="my-0">Delivery Fee will be shown after you review order
</h1>
                </div>
                <div className="bg-white max-sm:w-full w-[505px] p-5 fixed bottom-0 ">
                    <div className="flex text-2xl mb-4 w-full" >
                        <h1>Total</h1>
                        <h1 className="ml-auto">152.100 ₫</h1>
                    </div>
                    <button className="bg-green-grab w-full font-bold text-white rounded-md p-3">Add to Basket - 10.000đ</button>
                </div>
            </div>
        </>
     
    );
}