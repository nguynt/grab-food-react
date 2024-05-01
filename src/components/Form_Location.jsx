import location_icon from '../asset/location_Icon.png'
import choose_location from '../asset/choose_location.png'
export default function Form_Location(){
    return(
        <div className=" p-5 bg-white absolute top-28 md:max-w-[355px] w-full rounded-lg border-border-color border-[1px]" >
            <h3 className="font-bold mt-5 text-2xl">
                你好 
            </h3>
            <h1 className="font-bold lg:text-4xl text-2xl">
                Where should we deliver your food today?
            </h1>
            <div className='flex h-fit w-full border-[1px] p-3 rounded-md hover:border-green-grab border-border-color mt-4'>
               <a href=''> <img className='md:w-6 w-5 h-5' src={location_icon}></img></a>
                <input className="w-full outline-0 pl-2 pr-2"></input>
                <a href=''><img className='md:w-6 w-5 h-5' src={choose_location}></img></a>
            </div>
            <button className="mb-10 bg-green-grab w-full p-4 font-bold text-white rounded-md mt-6">Search</button>
        </div>
    );
}