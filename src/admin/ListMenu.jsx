import { useState } from "react";
import ItemMenu from "./ItemMenu";
import AddDish from "./AddDish";

export default function ListMenu({id_Res,...props}){
    const [newDish,setNewDish,refetch] = useState('hidden')
    function newDishClick(){
        if(newDish === 'w-full flex'){
            setNewDish('hidden')
        }
        else{
            setNewDish('w-full flex')
        }
    }

    return(
        <div className="w-full border-blue-theme border-[1px] rounded-md p-4 mt-4">
          
            <div className="flex ">
               
                <h1 className="font-medium text-gray-900 truncate dark:text-white text-[25px]">{props.title}</h1>
                <button onClick={newDishClick} className="bg-blue-theme p-2 rounded-md ml-auto w-[250px] text-white text-bold">Add new dish</button>
            </div>
            <AddDish className={newDish} id_Res={id_Res} id_Menu={props._id}></AddDish>
             <ul className="flex justify-between flex-wrap">
               {props.dish.map((item) => (
                    <ItemMenu {...item} ></ItemMenu>
               ))}
            </ul>
        </div>
    )
}