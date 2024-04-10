import { useState, useEffect } from 'react';
import location_icon from '../asset/location_Icon.png'


function Item_Dish(){
    return(
        <div className="flex my-4">
            <div className="flex items-center pr-4">
                <img className="w-[25px]" src="https://food.grab.com/static/images/icons/icon-minus-bordered.svg"></img>
                <h1 className="px-2">1</h1>
                <img className="w-[25px]" src="https://food.grab.com/static/images/icons/icon-plus-bordered.svg"></img>
            </div>
            <img className="w-[50px] rounded-lg" src="https://food-cms.grab.com/compressed_webp/items/VNITE20230824095023249178/photo/menueditor_item_cc8d3145502947b696edc1e923f929a9_1696430106988476331.webp"></img>
            <h1 className="p-2">Hawaiian Pizza</h1>
            <div className="ml-auto">
                <h1>152.100</h1>
                <del className="text-sm text-end">152.100</del>
            </div>
        </div>
    );
}

export default function Header_Green(){
    const [closeTab, setCloseTab] = useState(true);
    return (
        
        <div className=' main_header z-[3] bg-white' >
                        <div onClick ={() => setCloseTab(!closeTab)} className={!closeTab ? 'bg-black/30 w-full h-screen z-10 fixed': undefined}></div>
            <div className="menu_header p-4" >
            <a href="/grab-food-react"> <img id="logo_header" src="https://food.grab.com/static/images/logo-grabfood2.svg"/></a>

            <div className="max-sm:hidden flex items-center ml-[100px] mr-auto border-[1px] w-max-[360px] h-max[20px] border-[#aeaeae] p-[6px] rounded-s-md rounded-e-md">
                <span className="pl-4 pr-2 text-[15px] text-[#6C6767]">Deliver to</span>
                <img className="w-5 h-5" src={location_icon}></img>
                <span className="pl-2">Address User.........</span>
                
            </div>
            <div className="btn_left">
            
            <button onClick={()=>{setCloseTab(!closeTab)}} className="bg-white p-[8px] rounded-md border-[#f5f5f5] border-[1px]">
                <img className="w-5" src="https://food.grab.com/static/images/icons/icon-cart-default-black.svg"></img>
            </button>
            <div className={!closeTab ? 'menu max-sm:w-full w-[505px] h-full fixed top-0 z-10 right-0 bg-gray ':' w-[505px] max-sm:w-full h-full fixed top-0 z-0 left-[-100%] bg-gray '}>
                <div className="pt-1 fixed w-full flex items-center bg-white pl-4 pb-2 m-[1px]">
                    <button className="absolute" onClick ={() => setCloseTab(!closeTab)}><img className="w-[20px]" src="https://static.thenounproject.com/png/53235-200.png"></img></button>
                    <div className="w-[505px] max-sm:w-full  flex justify-center">
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
                    <div className="overflow-auto h-full p-4 pt-0 ">
                        <Item_Dish></Item_Dish>
                        <hr className="border-[80%] border-gray"/>
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

            <div className='border_header'>
                <div className="btn_header">
                    <a href="" id="btn_text" >
                        Login/Sign Up
                    </a>
                </div>
                </div>
            
                <div className="btn_header">
                    <a href="" id="btn_text">
                        EN
                    </a>
                </div>
            </div>
            
          
        </div>
        </div>
        
    );
}