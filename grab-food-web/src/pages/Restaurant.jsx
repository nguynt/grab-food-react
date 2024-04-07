import Header from "../components/Header";
import Header_Green from '../components/Header_Green'
import Info from "../components/Restaurant/Info";
import Menu_Item from "../components/Restaurant/Menu_Item";
import { Food_Promo } from "../data/data";
import React, {useRef, useState } from 'react';
import { Link,animateScroll as scroll, scrollSpy } from 'react-scroll';
import Footer from '../components/Footer';

function Button_Scroll(props){
    return (
        <div className="btn_active_res horizontal-scroll-item ">
            <Link className="max-sm:text-sm "  to={props.menuName} spy={true} smooth={true} offset={-150} duration={500}>
             
                    {props.menuName}
           
            </Link>
        </div>
    );
}
function Dish(props){
    return(
        <div className="bg-white p-5 flex mt-[68px]">
        <div>
            <img className="w-[100px] rounded-md" src="https://food-cms.grab.com/compressed_webp/items/VNITE20240401023457014792/photo/a146593b_b19a23a1709.webp"></img>
        </div>
        <div className="pl-4 w-[300px]">
            <h1 className="font-bold text-2xl">Khoai Tây Chiên (R) (1709)</h1>
            <p className="text-text">Giá gốc 30k giảm giá flash sale chỉ còn 10k cho khoai tây chiên (R). Đã bao gồm 1x Tương Cà</p>
        </div>
        <div className="font-bold text-xl">10.000</div>
    </div>
    );
}
function Option(props){
    return(
        <label className="p-4 flex">
        <input type="checkbox" className="accent-green-900 w-[25px] h-[25px] "   />
        <div className="flex items-center justify-between w-full pl-4 text-text">
            <div>{props.title}</div>
            <div>4.000</div>
        </div>
    </label>
    );
}
function Instructions(){
    return(
        <div className="bg-white w-[505px] max-sm:w-full p-4 mt-2 ">
            <div className="flex">
                <h1 className="font-bold">Special instruction</h1>&nbsp; <span > optional </span>
            </div>
            <input className="mt-2 hover:border-green-grab w-[98%] p-3 rounded-e-xl rounded-s-xl focus:border-[1px] focus:border-green-grab border-[1px]" placeholder="E.g No onions please"></input>
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
    //state close menu
    const [closeTab, setCloseTab] = useState(true);
    const handleMenuSelect = () => {
        setCloseTab(true);
    };
    const handleMenuSelected = () => {
        setCloseTab(false);
    };
    return (
        <div className="bg-[#F7F7F7] h-fit">
            <div onClick ={() => setCloseTab(!closeTab)} className={!closeTab ? 'bg-black/80 w-full h-screen z-10 fixed': undefined}></div>

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
                                    <div onClick ={() => setCloseTab(!closeTab) }>
                                        <Menu_Item  {...itemPro}></Menu_Item>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
            <div className={!closeTab ? 'menu max-sm:w-full w-[505px] h-full fixed top-0 z-10 right-0 bg-gray ':' w-[505px] max-sm:w-full h-full fixed top-0 z-0 left-[-100%] bg-gray '}>
                <div className=" fixed w-full bg-white p-5 m-[1px]">
                    <button onClick ={() => setCloseTab(!closeTab)}><img className="w-[20px]" src="https://static.thenounproject.com/png/53235-200.png"></img></button>
                </div>
                <div className="overflow-auto h-full">
                    <Dish></Dish>
                    <div className="bg-white max-sm:w-full w-[505px] p-4 mt-2">
                        <div className="flex">
                            <h1 className="font-bold">Khoai Tây Chiên (R)</h1> &nbsp;<span > option max, 4 </span>
                        </div>
                        <div>
                            <Option title = "Thêm 2 Gói Tương Cà"></Option>
                            <hr className="w-[99%] border-gray flex justify-center"></hr>
                            <Option title = "Thêm 2 Gói Tương Cà"></Option>
                            <hr className="w-[99%] border-gray flex justify-center"></hr>
                            <Option title = "Thêm 2 Gói Tương Cà"></Option>
                            <hr className="w-[99%] border-gray flex justify-center"></hr>
                            <Option title = "Thêm 2 Gói Tương Cà"></Option>
                            <hr className="w-[99%] border-gray flex justify-center"></hr>
                            <Option title = "Thêm 2 Gói Tương Cà"></Option>
                            <hr className="w-[99%] border-gray flex justify-center"></hr>
                            <Option title = "Thêm 2 Gói Tương Cà"></Option>
                            <hr className="w-[99%] border-gray flex justify-center"></hr>
                            <Option title = "Thêm 2 Gói Tương Cà"></Option>
                            <hr className="w-[99%] border-gray flex justify-center"></hr>
                            <Option title = "Thêm 2 Gói Tương Cà"></Option>
                            <hr className="w-[99%] border-gray flex justify-center"></hr>
                            <Option title = "Thêm 2 Gói Tương Cà"></Option>
                        </div>
                    </div>
                    <Instructions></Instructions>
                    <div className="mt-20"></div>
                </div>
                <div className="bg-white max-sm:w-full w-[505px] p-5 items-center justify-between fixed bottom-0 flex">
                    <div>
                        <img src="https://food.grab.com/static/images/icons/icon-minus-bordered.svg"></img>
                    </div>
                    <div className="flex justify-center items-center text-[20px] font-weight[3px] ">1</div>
                    <div>
                        <img src="https://food.grab.com/static/images/icons/icon-plus-bordered.svg"></img>
                    </div>
                    <button className="bg-green-grab max-sm:w-[250px] w-[300px] font-bold text-white rounded-md p-3">Add to Basket - 10.000đ</button>
                </div>
            </div>
            <p className="text-center text-sm m-4">We're always working to get the most accurate information. Let us know if you come across anything that's outdated!</p>
            <Footer></Footer>
        </div>);
}