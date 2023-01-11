import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const AllInOne = () => {
  return ( 
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur facere vero deleniti pariatur laudantium non, a nihil commodi magnam expedita quia facilis temporibus accusantium! Itaque et sed fugiat repellendus.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            
              <CheckIcon className="w-7 mr-4 text-green-600"></CheckIcon>
              <div>
                <h3 className="font-bold text-lg">Notifications</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam asperiores tenetur sit nulla? Incidunt, quibusdam!</p>
              </div>
            
          </div>
        </div>
      </div>
    </div>

   );
}
 
export default AllInOne;