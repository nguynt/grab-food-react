
export default function Item_Dish(){
    return(
        <div className="relative w-[170px] h-[100px] my-2 flex justify-center items-center rounded-md hover:border-green-grab hover:border-[2.5px]">
            <img className="backdrop-grayscale rounded-md w-full h-full" src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"></img>
            <div className="color absolute text-white ">Gần tôi</div>
        </div>
    )
}