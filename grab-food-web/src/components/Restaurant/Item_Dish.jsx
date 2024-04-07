
export default function Item_Dish(){
    return(
        <div className="relative flex justify-center items-center rounded-md hover:border-green-grab hover:border-[2.5px]">
            <img className="backdrop-grayscale rounded-md w-[170px] h-[100px]" src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"></img>
            <div className="color absolute text-white ">Gần tôi</div>

        </div>
    )
}