import { Meteors } from "@/components/ui/meteors";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen   bg-black py-12 pt-36">
        <div className="text-center ">
          <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
          <p className=" text-gray-400 font-normal text-base md:text-lg max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut id
            ducimus perspiciatis doloremque in dolor quibusdam hic ipsam vitae
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ipsam
            omnis sed dolorum
          </p>
        </div>
        <div className="p-6 bg-black min-h-screen flex flex-col items-center">
          <div className="w-full max-w-lg">
            <input
              className="py-2 bg-black px-4 border rounded-md w-full focus:outline-none placeholder-gray-400"
              type="text"
              placeholder="Enter your email"
            />
          </div>

          <div className="mt-6 w-full max-w-lg">
            <textarea
              className=" bg-black border rounded-md w-full focus:outline-none p-4 placeholder-gray-400"
              rows={5}
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button className="mt-6 bg-cyan-400 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Send Message
          </button>
        </div>
              <Meteors number={150} />
      </div>
    </>
  );
};

export default page;
