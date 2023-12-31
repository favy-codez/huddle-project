// import React from "react";
import chef6 from '../assets/chef6.jpg'
import {Button} from '../components/Button.jsx'

const Aboutus = () => {
    return (
      <div>
        <div className="aboutUsWrapper flex px-[90px] py-[60px] bg-gradient-to-r from-[#fef5f0] to-[#d1cfd0]/30">
            <div className="img w-1/2 pr-[120px]">
              <img src={chef6} alt="" className="w-[40%] float-right" />
            </div>
            <div className="aboutUs w-1/2">
              <h2 className="font-bold text-xl">About Us <br/> We Have Provided A Quality Driver</h2>
              <p className="py-[30px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis molestiae alias adipisci quam mollitia corporis 
                maiores ducimus dolore 
                consequuntur quod. Veniam nam velit accusantium nemo? Nisi similique numquam placeat? Earum.</p>
                <Button text={"READ MORE"} className="text-white"></Button>
            </div>
        </div>
      </div>
    );
  };
  
  export default Aboutus;
  