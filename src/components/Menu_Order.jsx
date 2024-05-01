function Dish({data}){
    return(
        <div className="bg-white p-5 flex mt-[68px]">
        <div>
            <img className="w-[100px] rounded-md" src={process.env.REACT_APP_LOCAL_HOST+data.img}></img>
        </div>
        <div className="pl-4 w-[300px]">
            
            <h1 className="font-bold text-2xl">{data.name}</h1>
            <p className="text-text">{data.description}</p>
        </div>
        <div className="font-bold text-xl">{data.price}đ</div>
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
export default function Menu_Order({...props}){
    console.log(props)
    const data = props;
    return(
        <div>
            <div className="overflow-auto h-full">
                <Dish data={data}></Dish>
                <div className="bg-white max-sm:w-full w-[505px] p-4 mt-2">
                    <div className="flex">
                        <h1 className="font-bold">{props.name}</h1> &nbsp;<span > option max, 4 </span>
                    </div>
                    <div>
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
                <button className="bg-green-grab max-sm:w-[250px] w-[300px] font-bold text-white rounded-md p-3">Add to Basket - {props.price}đ</button>
            </div>
        </div>
    );
}