import Footer from "../components/Footer";
import Header_Green from "../components/Header_Green"
import Item_Dish from "../components/Restaurant/Item_Dish"
import ListRestaurant from "../components/Restaurant/List_Restaurant";
import { Food_Promo } from "../data/data";
function SearchItem(){
    return(
        <div className="bg-[#F7F7F7] rounded-s-full rounded-e-full  w-full h-fit flex p-2 mb-5">
            <img className="w-[18px] h-[18px] ml-5" src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"></img>
            <input placeholder="Search for a dish ỏ a restaurant" className="text-sm text-[#676767] bg-[#F7F7F7] w-full h-5 outline-none ml-2"></input>
        </div>
    );
}

export default function searchRes(){
    return(
        <div className="bg-[#F7F7F7] h-fit">
            <Header_Green/>
      
            <div className="flex justify-center bg-white" >
                    <div className="lg:w-[1200px] p-4 pb-0 w-full bg-white mt-20">
                        <div>
                         <SearchItem/>
                        </div>
                        <Item_Dish></Item_Dish>
                    </div>
            </div>
            <div>
            <div className="flex mt-4 justify-center bg-white" >
                <div className="grid gap-3 p-4 w-[1200px] grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-3">
                    <ListRestaurant {...Food_Promo[0]}/>
                    <ListRestaurant {...Food_Promo[1]}/>
                    <ListRestaurant {...Food_Promo[0]}/>
                    <ListRestaurant {...Food_Promo[0]}/>
                    <ListRestaurant {...Food_Promo[1]}/>
                    <ListRestaurant {...Food_Promo[0]}/>
                    <ListRestaurant {...Food_Promo[1]}/>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>

    )
}