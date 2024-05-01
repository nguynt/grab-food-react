import { useQuery} from '@apollo/client';
import { getRestaurants } from '../client-graph/queries';
import ItemRes from './ItemRestaurant';
export default function ListRestaurant(){
    const {data,loading,error,refetch} = useQuery(getRestaurants);
    if(loading) return<p>Loading...</p>
    if(error) return<p>{error}</p>
    console.log(data);
    const handleReload = () => {
        refetch();
    };

    return(
        <div className=' my-5'>
            <div className='flex'>
                <h1>List Restaurant</h1>
                <button className='bg-blue-theme rounded-md p-2 text-white ml-auto' onClick={handleReload}>Reload Data</button>
            </div>
            <ul class="lg:grid-cols-3 grid w-full gap-4">
                {data.getRestaurant.map((item,key) => (
                    <ItemRes {...item}></ItemRes>
                ))}
            </ul>
        </div>
  
    );
}