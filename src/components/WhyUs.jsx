import Image from "next/image";
import leftImg from "../../public/images/left.jpg";
import rightImg from "../../public/images/why-right.jpg";

import lamborghini from "../../public/images/logos/lamborghini.svg";
import porsche from "../../public/images/logos/porsche.svg";
import tesla from "../../public/images/logos/tesla.svg";
import bmw from "../../public/images/logos/bmw.svg";

const WhyUs = () => {
  return (
    <section
      className='bg-[#161a1e] min-h-screen flex flex-col justify-center items-center '
      id='collection'
    >
      <div className='flex'>
        <div
          div
          style={{
            position: "relative",
            width: `${800}px`,
          }}
        >
          <Image
            className=' rounded-2xl mt-56'
            src={leftImg}
            alt='right image'
            layout='fixed'
          />
        </div>

        <div className='flex flex-col space-x-4 '>
          <text className='font-serif font-normal text-4xl px-40 tracking-wider'>
            A garage driven by{" "}
            <text className='text-orange-500'>
              passion & love for Lamborghini{" "}
            </text>
            and other premium brands.
          </text>
          <text className='mt-10 pr-40 pl-36 text-pretty text-[#afb1b2]'>
            Garage embodies a concept born from years of sincere passion and
            fondness for Supercars.We specialize primarly in the brokerage of
            Lamborghini, but our expertise extends to other premium brands as
            well, maintaining professional standards and a dedicated approach.
          </text>
          <div className='flex space-x-16 justify-center items-center mt-16 pr-10'>
            <Image src={lamborghini} alt='right image' width={80} />
            <Image src={porsche} alt='right image' width={80} />
            <Image src={bmw} alt='right image' width={80} />
            <Image src={tesla} alt='right image' width={80} />
          </div>
        </div>
        <Image
          className=' rounded-2xl'
          src={rightImg}
          alt='right image'
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default WhyUs;
