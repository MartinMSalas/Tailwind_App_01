import React from "react";
import { PhoneIcon,  } from "@heroicons/react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

import supportImg from "../assets/support.jpg"

const Support = () => {
  return (
    <div>
      <div>
        <img src={supportImg} alt="/"></img>
      </div>
      <div>
        <div>
          <h2>Support</h2>
          <h3>Finding the right team</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, sint soluta suscipit quis ducimus rerum autem, quod laborum explicabo cumque distinctio temporibus hic molestiae quasi culpa nisi aliquam libero deleniti!</p>
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