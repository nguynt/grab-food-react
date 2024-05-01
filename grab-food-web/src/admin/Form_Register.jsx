import { useState,useRef } from "react";
import {createNewRestaurant} from '../client-graph/mutations'
import { useMutation } from "@apollo/client";
import ListRestaurant from "./ListRestaurant";
import Input from "./InputValue";
import axios from 'axios'
export default function Form_Register(){
    const [file, setFile] = useState()
    const nameRef = useRef(null);
    const ownerRef = useRef(null);
    const descriptionRef = useRef(null);
    const locationRef = useRef(null);
    const ImgRef = useRef(null);

    console.log(process.env);
    const handleSubmit = (event) => {
        event.preventDefault();
        setFile(ImgRef.current.files[0])
        const formData = new FormData();
        formData.append( "name", nameRef.current.value);
        formData.append( "owner", ownerRef.current.value);
        formData.append( "description", descriptionRef.current.value);
        formData.append("image",file)
        axios.post(process.env.REACT_APP_LOCAL_HOST+"/postRestaurant",formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then(
            res => {
                alert(res.data.message)
            }
        ).catch(
            err =>{
                alert(err.message)
            }
        )

    }

    return (
        <>
            <form className="max-w-[1200px] w-full ml-auto mr-auto" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <Input forwardRef={nameRef}  title={"Name Restaunrant"} place={"Hadilao - Quan 10"}></Input>
                    <Input forwardRef={ownerRef} title={"Owner"} place={"Username"}></Input>
                    <Input forwardRef={descriptionRef} title={"Description"} place={"Category"}></Input>
                    <Input forwardRef={locationRef} title={"Location"} place={"Address"}></Input>
                    <Input forwardRef={ImgRef} type="file" title={"Image"} place={"Address"}></Input>

                </div>
                <button className="bg-blue-theme p-2 rounded-md mr-auto w-full text-white text-bold" type="submit">Register Restaurant</button>
            </form>
          
           <ListRestaurant></ListRestaurant>
        </>
      
    );  

}