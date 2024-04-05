import { useState } from 'react';
export default function Header(){
    const [color,setColor] = useState("transparent")
    const [ImgHeader,setImgHeader] = useState("https://food.grab.com/static/images/logo-grabfood-white2.svg")
    const changeColor = () =>{
        if(window.scrollY >=90){
            setColor("white")
            setImgHeader("https://food.grab.com/static/images/logo-grabfood2.svg")
        }
        else{
            setColor("transparent")
            setImgHeader("https://food.grab.com/static/images/logo-grabfood-white2.svg")
        }
    }
    window.addEventListener('scroll',changeColor)
    return (
        <div className='main_header z-[3]' style={{ backgroundColor: color }}>
            <div className="menu_header" >
            <a href=""> <img id="logo_header" src={ImgHeader}/></a>
            <div className="btn_left">
            <a className="bg-white p-[8px] rounded-md border-[#f5f5f5] border-[1px]">
                <img className="w-5" src="https://food.grab.com/static/images/icons/icon-cart-default-black.svg"></img>
            </a>
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