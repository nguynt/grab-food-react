import {Link} from "react-router-dom"
export default function ItemRes({name,description,address,_id,owner,img}){
    
    return(
            <li class="  w-full flex ">
                 <Link to={`/restaurant/details/${_id}`}>
                <div class="flex items-center space-x-4 hover:border-blue-theme hover:border-[1px] rounded-md ">
            

                    <div class="flex-shrink-0">
                        <img class="w-[120px] h-[120px] object-cover rounded-md" src={process.env.REACT_APP_LOCAL_HOST+img} alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm  font-medium  text-gray-500 pb-1 truncate dark:text-gray-400">
                        owner: {owner}
                        </p>
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {name}
                        </p>
                      
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {description}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {address}
                    </div>
                
            
                </div>
            </Link>
            </li>
        
    );
}