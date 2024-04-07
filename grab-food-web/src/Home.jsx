import './App.css';
import Header from './components/Header';
import Form_Location from './components/Form_Location';
import Grid_Food from './components/Grid_Food';
import { Food_EV } from './data/data';
import { why_grab } from './data/data';
import Why_GrabFood from './components/Why_GrabFood';
import Exp_With_Grab from './components/Exp_With_Grab';
import Footer from './components/Footer';
import { useState } from 'react';
import { bg_data } from './data/bg_data';
import Slick_Res from './components/Slick_Res';
import Ask_Home from './components/Ask_Home';
function App() {

  
  //random bg
  const rndInt = Math.floor(Math.random() * 3) + 0
  return (
    <div>
       <Header/>
       <div >
        <img className="w-full h-96 object-cover" src={bg_data[rndInt].link}></img>
       </div>
      
      <div className="flex justify-center" >
        <div style={{width: 1200}}>
          <div>
            <Form_Location ></Form_Location>
              <div className='flex justify-center mt-32'> 
                <div className='w-full'>
                  <h1 className="font-bold md:text-4xl text:xl p-4 ">GrabFood Promo in <span className="text-green-grab">Location</span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slick_Res></Slick_Res>
      <div className="flex justify-center" >
          <div style={{width: 1200}}> 
          <div className='flex justify-center p-4 '> 
            <div className='w-full'>
              <a href='/grab-food-react/#/searchRes' ><div className=" p-3 text-center text-[#676767]  border-[1px] rounded-md border-[#676767] font-bold mt-3 mb-3 hover:border-green-grab hover:text-green-grab w-full">See all promotions</div></a>
            </div>
          </div>
          <h1 className="font-bold md:text-4xl text:3xl w-full p-4 pb-0">There's something for everyone!</h1>
          <div className="grid lg:grid-cols-4 gap-5 mt-7 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 p-4 pt-0">
            
            <Grid_Food image = {Food_EV[0].image}
            name = {Food_EV[0].name}></Grid_Food>
            <Grid_Food {...Food_EV[1]}></Grid_Food>
            <Grid_Food {...Food_EV[2]}></Grid_Food>
            <Grid_Food {...Food_EV[3]}></Grid_Food>
            <Grid_Food {...Food_EV[4]}></Grid_Food>
            <Grid_Food {...Food_EV[5]}></Grid_Food>
            <Grid_Food {...Food_EV[6]}></Grid_Food>
            <Grid_Food {...Food_EV[7]}></Grid_Food>
            <Grid_Food {...Food_EV[8]}></Grid_Food>
            <Grid_Food {...Food_EV[9]}></Grid_Food>
            <Grid_Food {...Food_EV[10]}></Grid_Food>
          </div>
          <div className=" p-4">
          <h1 className="font-bold text-4xl w-full mb-4 mt-10">Why GrabFood?</h1>
            <ul className="p-4 text-sm">
              <Why_GrabFood {...why_grab[0]}></Why_GrabFood>
              <Why_GrabFood {...why_grab[1]}></Why_GrabFood>
              <Why_GrabFood {...why_grab[2]}></Why_GrabFood>
              <Why_GrabFood {...why_grab[3]}></Why_GrabFood>
              <Why_GrabFood {...why_grab[4]}></Why_GrabFood>
            </ul>
           <Ask_Home></Ask_Home>
          </div>
         
          </div>
        </div>
        <div className="bg-[#F7F7F7] flex justify-center">
          <div className="w-[1200px]">
          <Exp_With_Grab></Exp_With_Grab>
          </div>
        </div>
        <Footer></Footer>
    </div>

   
  );
}

export default App;
