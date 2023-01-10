import React from "react";
import { PhoneIcon,  } from "@heroicons/react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { CpuChipIcon, UserGroupIcon} from "@heroicons/react/24/solid";

import supportImg from "../assets/support.jpg"

const Support = () => {
  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute"> 
        <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/"></img>
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h2>
          <h3 className="py-8 text-5xl font-bold tpy-6 text-center">Finding the right team</h3>
          <p className="py-4t text-3xl text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, sint soluta suscipit quis ducimus rerum autem, quod laborum explicabo cumque distinctio temporibus hic molestiae quasi culpa nisi aliquam libero deleniti!</p>
        </div>
        <div>
          <div>
            <div>
              <PhoneIcon> </PhoneIcon>
              <h3>Sales</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dicta molestias voluptas, veritatis, officia nemo mollitia quae voluptatibus quidem quaerat nostrum, repellendus aperiam facilis tenetur harum quos. Aliquid, harum obcaecati.</p>              
            </div>
            <div>
              <p>Contact Us <ArrowSmallRightIcon></ArrowSmallRightIcon></p>
            </div>
          </div>
        </div>
      </div>
      
      

    </div>
    );
}
 
export default Support;