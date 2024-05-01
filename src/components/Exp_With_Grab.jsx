export default function Exp_With_Grab(props){
    return(
        <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#F7F7F7] p-24">
        <div className="flex items-center flex-col">
            <img className="w-[150px]" src="https://food.grab.com/static/page-home/bottom-food-options.svg"></img>
            <h1 className="font-bold text-[18px] mt-3 mb-2">Curated restaurants</h1>
            <p className="text-[12px] w-[400px] text-center">From small bites to big meals, we won't limit your appetite. Go ahead and order all you want.</p>
        </div>
        <div className="flex items-center flex-col">
            <img className="w-[150px] h-[150px]" src="https://food.grab.com/static/images/ilus-cool-features-app.svg"></img>
            <h1 className="font-bold text-[18px]  text-center mt-3 mb-2">More cool features available on the app</h1>
            <p className="text-[12px] w-[400px] text-center">Download Grab app to use other payment methods and enjoy seamless communication with your driver.</p>
            <div className="flex mt-4 gap-6">
                <a><img src="https://food.grab.com/static/images/logo-appstore.svg"></img></a>
                <a><img src="https://food.grab.com/static/images/logo-playstore.svg"></img></a>
            </div>
        </div>
    </div>
    );
}