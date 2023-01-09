import React from "react";


const About = () => {
  return ( 
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto ">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Trusted by developers across the world</h2>
          <p className="text-3xl py-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error expedita quisquam quibusdam vero! Incidunt modi dolore error itaque vero quisquam minima reiciendis quod distinctio, libero ipsum, numquam accusantium quos. Quo!</p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div>
            <p>100%</p>
            <p>Completion</p>
          </div>
          <div>
            <p>24/7</p>
            <p>Delivery</p>
          </div>
          <div>
            <p>100k</p>
            <p>Transactions</p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default About;