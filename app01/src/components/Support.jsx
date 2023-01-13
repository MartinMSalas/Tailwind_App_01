import React from "react";
import { PhoneIcon,  } from "@heroicons/react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { CpuChipIcon, UserGroupIcon} from "@heroicons/react/24/solid";

import supportImg from "../assets/support.jpg"

const Support = () => {
  return (
    <div className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute"> 
        <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/"></img>
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h2>
          <h3 className="py-8 text-5xl font-bold tpy-6 text-center">Finding the right team</h3>
          <p className="py-4t text-3xl text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, sint soluta suscipit quis ducimus rerum autem, quod laborum explicabo cumque distinctio temporibus hic molestiae quasi culpa nisi aliquam libero deleniti!</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"> </PhoneIcon>
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dicta molestias voluptas, veritatis, officia nemo mollitia quae voluptatibus quidem quaerat nostrum, repellendus aperiam facilis tenetur harum quos. Aliquid, harum obcaecati.</p>              
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">Contact Us <ArrowSmallRightIcon className="w-5 ml-2"></ArrowSmallRightIcon></p>
            </div>
          </div>
        
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <UserGroupIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"> </UserGroupIcon>
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dicta molestias voluptas, veritatis, officia nemo mollitia quae voluptatibus quidem quaerat nostrum, repellendus aperiam facilis tenetur harum quos. Aliquid, harum obcaecati.</p>              
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">Contact Us <ArrowSmallRightIcon className="w-5 ml-2"></ArrowSmallRightIcon></p>
            </div>
          </div>
        
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <CpuChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"> </CpuChipIcon>
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dicta molestias voluptas, veritatis, officia nemo mollitia quae voluptatibus quidem quaerat nostrum, repellendus aperiam facilis tenetur harum quos. Aliquid, harum obcaecati.</p>              
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">Contact Us <ArrowSmallRightIcon className="w-5 ml-2"></ArrowSmallRightIcon></p>
            </div>
          </div>
        </div>
      </div>
      
      

    </div>
    );
}
 
export default Support;