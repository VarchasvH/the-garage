import Image from "next/image";
import React from "react";
import extra1 from "../../public/images/extra1.jpg";
import extra2 from "../../public/images/extra2.jpg";

const Extra = () => {
  return (
    <section className='bg-[#161a1e] min-h-screen'>
      <div className='flex'>
        <div className='flex flex-col space-x-4 '>
          <text className='font-serif font-normal text-4xl px-48 tracking-wider mt-32'>
            We are a{" "}
            <text className='text-orange-500'>forward-leaning car dealer </text>
            in <text className='text-orange-500 text-6xl'>In</text>
            <text className='text-white text-6xl'>d</text>
            <text className='text-green-800 text-6xl'>ia</text>.
          </text>
          <text className='mt-10 pl-48 pr-52 text-pretty text-2xl '>
            Experience the future of automotive excellence with our curated
            collection of luxury vehicles
          </text>
          <text className='mt-10 pl-48 pr-52 text-pretty text-slate-300 '>
            Discover unparalled craftsmanship and innovation at our dealership.
            As India&apos;s premier forward-leaning car dealer we specialize in
            offering an exclusive selection of luxury and performance vehicles.
            Our commitment to excellence ensures a bespoke buying experince,
            tailored to the discerning tastes of our clients.
          </text>
          <div className='flex space-x-16 justify-center items-center mt-16 pr-10'></div>
        </div>
        <div className='flex flex-col gap-4 mt-32 pr-10'>
          <Image
            className=' rounded-2xl'
            src={extra1}
            alt='right image'
            width={1000}
          />
          <Image
            className=' rounded-2xl'
            src={extra2}
            alt='right image'
            width={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Extra;
