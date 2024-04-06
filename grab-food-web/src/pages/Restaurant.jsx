import Header from "../components/Header";
import Header_Green from '../components/Header_Green'
import Info from "../components/Restaurant/Info";
import Menu_Item from "../components/Restaurant/Menu_Item";
import { Food_Promo } from "../data/data";
import React, {useRef, useEffect, useState } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Footer from '../components/Footer';

function Button_Scroll(props){
    return (
        <div className="btn_active_res horizontal-scroll-item">
            <Link  to={props.menuName} spy={true} smooth={true} offset={-150} duration={500}>
                {props.menuName}
            </Link>
        </div>
    );
}
export default function Restaurant(){
    const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const x = event.clientX;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
    const [fixedMenu, setFixedMenu] = useState("")
    const fixedMenufunc = ()=>{
        if(window.scrollY >= 200){
            setFixedMenu("fixed top-[70px]")
        }
        else{
            setFixedMenu("")
        }
    }
    window.addEventListener('scroll',fixedMenufunc)
    return (
        <div className="bg-[#F7F7F7] h-fit">
            <Header_Green/>
            <div className="flex justify-center bg-white" >
                    <div className="lg:w-[1200px] p-4 pb-0 w-full bg-white">
                        <Info {...Food_Promo[0]}></Info>
                    </div>
            </div>
            <div className={`flex justify-center w-full bg-white transition-transform  ${fixedMenu}`} >
                <div className="lg:w-[1200px] p-4 pb-0 w-full bg-white">
                <div className="bg-white">
                   
                            <div>
                                    <div className={`bg-white flex mt-3 p-1 horizontal-scroll-container`}
                                    ref={containerRef}
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseLeave}>
                                        {Food_Promo[0].menu.map((itemMenu,indexMenu) =>(
                                            <Button_Scroll {...itemMenu}/>
                                        ))}
                                    </div>
                            </div>
                      
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div >

                            {Food_Promo[0].menu.map((itemMenu,indexMenu) =>(
                                <div name={itemMenu.menuName}>
                                    <h1 className="text-4xl font-bold p-4">
                                        {itemMenu.menuName}</h1>
                                    <div  key={indexMenu} className="grid lg:grid-cols-3 gap-5 grid-cols-1 lg:w-[1200px] p-4 w-full">
                                        {itemMenu.item.map((itemPro,indexPro) =>(
                                            <Menu_Item {...itemPro}></Menu_Item>
                                        ))}
                                    </div>
                    
                        </div>
                    ))}
                </div> 
            </div>
            <p className="text-center text-sm m-4">We're always working to get the most accurate information. Let us know if you come across anything that's outdated!</p>
            <Footer></Footer>
        </div>);
}