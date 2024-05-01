
function deleteItem(){
    alert('Chưa làm...')
}

export default function ItemMenu({...props}){
    return(
        <li className="pb-3 w-[30%]">
        <div className="flex items-center space-x-4 hover:border-blue-theme hover:border-[1px] rounded-md">
            <div className="flex-shrink-0">
                <img className="h-[100px] w-[100px]  rounded-md" src={process.env.REACT_APP_LOCAL_HOST+props.img} alt="Neil image"/>
            </div>
            <div className="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                {props.name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {props.description  }
                </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {props.price}
            </div>
            <div>
                <button onClick={deleteItem} className=" w-[22px]"><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"/></button>
                <button onClick={deleteItem} className="w-[22px]"><img src="https://cdn-icons-png.flaticon.com/512/484/484662.png"/></button>

            </div>
        </div>
    </li>
    );
}