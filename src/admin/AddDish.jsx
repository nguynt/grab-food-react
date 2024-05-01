import Input from "./InputValue";
import { useRef, useState } from "react";
import axios from "axios";
export default function AddDish({id_Res,id_Menu, className}){
    const [file,setFile] = useState();
    const nameRef = useRef(null);
    const priceRef = useRef(null);
    const descriptionRef = useRef(null);
    const imgRef = useRef(null);
    const addDish = (event) =>{
        event.preventDefault(); 
        setFile(imgRef.current.files[0]);
        const formData = new FormData();
        formData.append("idRes",id_Res);
        formData.append("idMenu",id_Menu)
        formData.append("name",nameRef.current.value);
        formData.append("price",priceRef.current.value);
        formData.append("description",descriptionRef.current.value);
        formData.append("image",file);
        axios.post(process.env.REACT_APP_LOCAL_HOST+'/postNewDish',formData,{
           headers:{
            'Content-Type':'multipart/form-data'
           } 
        }).then(result =>{
            alert(result.data.message)
        })
    }
    
    return (
        <form  onSubmit={addDish} className="mt-2">
            <div className={className}> 
            
                    <Input forwardRef={nameRef}  title={"Name"} place={"Chan ga sot thai"}></Input>
                    <Input forwardRef={priceRef} type="number" title={"Price"} place={"20000"}></Input>
                    <Input forwardRef={descriptionRef}  title={"Description"} place={"Rat ngon"}></Input>
                    <Input forwardRef={imgRef} type="file" title={"Image"} place={""}></Input>
                    <button type="submit" className="bg-blue-theme p-2 rounded-md h-fit mt-auto mb-auto text-white text-bold">Add</button>
            
            </div>
        </form>
    );
}
{/* <div class="sm:col-span-3">
<label for="country" class="block text-sm font-medium leading-6 text-gray-900">Menu Title</label>
<div class="mt-2">
    <select ref={menuRef} id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
        {data.menu.map((item) => (
            <option>{item.title}</option>
        ))}
    </select>
</div>
</div>  */}