export default function Footer(props){
    return(
        <div className="bg-green-grab flex justify-center">
          <div className="w-[1200px]">
          <div>
            <img className="w-[120px] m-5" src="https://food.grab.com/static/images/logo-grabfood-white2.svg"></img>
            <hr className="m-5 border-[#3AC377]"></hr>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 text-white font-bold text-sm">
                <ul >
                    <a><li className="m-5 mb-0">About Grab Food</li></a>
                    <a><li className="m-5 mb-0">About Grab</li></a>
                    <a><li className="m-5 mb-0">Blog</li></a>
                </ul>
                <ul>
                    <a><li className="m-5 mb-0">Be a GrabFood Merchant</li></a>
                    <a><li className="m-5 mb-0">Drive With Grab</li></a>
                </ul>
                <ul>
                    <a><li className="m-5 mb-0">Help</li></a>
                    <a><li className="m-5 mb-0">FAQs</li></a>
                </ul>
                <div className="flex">
                    <a href=""><img width={20} className="m-5 mb-0" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"></img></a>
                    <a href=""><img width={20} className="m-5 mb-0" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"></img></a>
                    <a href=""><img width={20} className="m-5 mb-0" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"></img></a>
                </div>
            </div>
            <hr className="m-5 mb-0  border-[#3AC377]"></hr>
            <div className="grid lg:grid-cols-3 grid-cols-1 mb-2 p-4">
                <div className="flex mt-4 gap-6 mb-3">
                    <a><img src="https://food.grab.com/static/images/logo-appstore.svg"></img></a>
                    <a><img src="https://food.grab.com/static/images/logo-playstore.svg"></img></a>
                </div>
                <div className="w-full"></div>
                <div className="mb-3 text-white text-[12px] gap-5 flex items-center">
                    <span>© 2024 Grab</span>
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
          </div>
        </div>
      
    )
}