
import './App.css';
import Header from './components/Header';
import Form_Location from './components/Form_Location';
import Grid_Food from './components/Grid_Food';
import { Food_EV } from './data/data';
import { Food_Promo } from './data/data';
import { why_grab } from './data/data';
import GrabFood_Promo from './components/GrabFood_Promo';
import Why_GrabFood from './components/Why_GrabFood';
import Exp_With_Grab from './components/Exp_With_Grab';
import Footer from './components/Footer';
function App() {
  
  return (
    <div>
       <Header/>
       <div >
        <img className="w-full h-96 object-cover" src='https://food.grab.com/static/page-home/VN-new-3.jpg'></img>
       </div>
      <div className="flex justify-center" >
        <div style={{width: 1200}}>
          <Form_Location ></Form_Location>
          <div className="mt-24 p-4 w-full">
              <h1 className="font-bold md:text-4xl text:xl p-4">GrabFood Promo in <span className="text-green-grab">Location</span></h1>
              <GrabFood_Promo {...Food_Promo[0]}></GrabFood_Promo>
           {/*
            <div className='flex gap-4 overflow-y-auto w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4'>
                 
                  <GrabFood_Promo {...Food_Promo[0]}></GrabFood_Promo>
                  <GrabFood_Promo {...Food_Promo[0]}></GrabFood_Promo>
                  <GrabFood_Promo {...Food_Promo[0]}></GrabFood_Promo>
                  <GrabFood_Promo {...Food_Promo[0]}></GrabFood_Promo>
                  <GrabFood_Promo {...Food_Promo[0]}></GrabFood_Promo>
     
                </div>
           */}  
              <button className=" p-3 text-[#676767]  border-[1px] rounded-md border-[#676767] font-bold mt-3 mb-3 hover:border-green-grab hover:text-green-grab w-full">See all promotions</button>
    
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
            <h1 className="font-bold text-4xl w-full mb-4 mt-10">Frequently Asked Questions</h1>
            <h1 className="font-bold text-2xl w-full mb-4 mt-10">What is GrabFood?</h1>
            <p>
            GrabFood is the fastest Food Delivery service in Vietnam. We have curated all your favorite dishes, restaurants, and cuisines to help you grab your food in the easiest & quickest way possible. Find and order your favorite cuisines across Vietnam - order food online in just a few taps, from Lifted Coffee & Brunch - Hàng Gà for Breakfast, Maazi Indian - Nhà Hàng Ấn Độ for Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam.


            </p>
            <button className=" p-3 text-[#676767]  border-[1px] rounded-md border-[#676767] font-bold mt-3 mb-3 hover:border-green-grab hover:text-green-grab w-full">Read more</button>
          </div>
         
        </div>
     
        </div>
        <div className="bg-[#F7F7F7] flex justify-center">
          <div className="w-[1200px]">
          <Exp_With_Grab></Exp_With_Grab>
          </div>
        </div>
        <div className="bg-green-grab flex justify-center">
          <div className="w-[1200px]">
          <Footer></Footer>
          </div>
        </div>
    </div>

   
  );
}

export default App;
