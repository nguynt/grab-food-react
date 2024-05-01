import { useParams} from "react-router-dom";
import { getRestaurantID } from "../client-graph/queries";
import { useQuery } from "@apollo/client";
import Input from "./InputValue";
import { useRef } from "react";
import ListMenu from "./ListMenu";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { deleteRestaurant,addnewMenu } from "../client-graph/mutations";
import Modal from 'react-modal';
import { Link } from "react-router-dom";
export default function DetailRestaurant(){
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      let subtitle;
      const [modalIsOpen, setIsOpen] = useState(false);
      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    const [openMenu,closeMenu] = useState(true);
    const nameRef = useRef(null);
    const ownerRef = useRef(null);
    const descriptionRef = useRef(null);
    const locationRef = useRef(null);
    const passwordRef = useRef(null);
    const titleRef = useRef(null);





    const { id } = useParams();
    const [deleteRestaurantID,{error_dl}] = useMutation(deleteRestaurant);

    const {data,error,loading,refetch} = useQuery(getRestaurantID, {
        variables:{
            id:id
        }
    });
    function reloadMenu(){
        refetch()
    }
    const [setnewMenu,{dataMenu}] = useMutation(addnewMenu)

    const addNewMenu = () =>{
        try{
            setnewMenu({
                variables:{
                    "id": id,
                    "menuInput": {
                        "title": titleRef.current.value
                    }
            }
            })
            alert('Tạo thành công')
        }
        catch{
            alert('Tạo thất bại')
        }
    }

    if(loading) return <h1>Loading</h1>
    const dataID = data.getRestaurantID;
    console.log(dataID.menu)
  
    function deleteItem(){ 
        if(passwordRef.current.value == 'password'){
            deleteRestaurantID({
                variables:{
                    id:id
                }
            })
            if(error_dl){
                alert("Fail")
            }
            else{
                alert('Xóa thành công')
            }
        }
        else{
            alert('sai mk r')
        }
  
    }
    //add new menu

    return (
        <div className="max-w-[1200px] w-full ml-auto mr-auto flex flex-wrap">
            <Link className="font-medium text-gray-900 truncate dark:text-white text-[25px]" to="/admin">Home</Link>
            <div className="max-w-[1200px] w-full ml-auto mr-auto flex flex-wrap">
            <div className="flex w-full"><h1 className=" font-medium text-gray-900 truncate dark:text-white text-[25px]">Restaurant Infomation</h1>
            <button className="bg-red-theme ml-auto text-white p-2 rounded-md cursor-pointer" onClick={openModal}>Delete Restaurant</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="flex">
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Bạn se hoi han</h2>
                        <button className="ml-auto" onClick={closeModal}>x</button>
                    </div>
                    <form className="w-full">
                        <input placeholder="Type your password" type="text" ref={passwordRef}  className="appearance-none z-10 block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"/>

                        <button onClick={deleteItem} className="bg-red-theme text-white p-2 rounded-md cursor-pointer">Delete Restaurant</button>
                    </form>
                </Modal>
            </div>

            <Input forwardRef={nameRef} value={dataID.name} title={"Name Restaunrant"} place={"Hadilao - Quan 10"}></Input>
            <Input forwardRef={ownerRef} value={dataID.owner} disabled title={"Owner"} place={"Username"}/> 
            <Input forwardRef={descriptionRef} value={dataID.description} title={"Description"} place={"Category"}/> 
            <Input forwardRef={locationRef} value={dataID.owner} title={"Location"} place={"Address"}/> 
            </div>
            <div className="w-full flex">
                <h1 className="font-medium text-gray-900 truncate dark:text-white text-[25px]">Menu</h1>
               <div className="ml-auto ">
                    <button className="bg-blue-theme p-2 rounded-md  text-white text-bold" onClick={''}>Add new menu</button>
                    <button className="bg-blue-theme p-2 rounded-md ml-2  text-white text-bold" onClick={reloadMenu}>Reload</button>
               </div>
            </div>
               <form className="w-full flex" onSubmit={addNewMenu}>
                    <div className="w-full flex">
                        <Input forwardRef={titleRef} title={"Title Menu"} place={"Combo..."}></Input>
                        <button type="submit" className="bg-blue-theme p-2 rounded-md ml-2 h-fit my-auto text-white text-bold" onClick={''}>Tạo</button>
                    </div>
               </form>
            {dataID.menu.map((item,key) =>(
                <ListMenu {...item} id_Res={dataID._id}></ListMenu>
            ))}
        </div>
        
    );
}