import Image from "next/image";
import porsche1 from "../../../public/images/porsche/porsche-1.jpg";
import porsche2 from "../../../public/images/porsche/porsche-2.jpg";
import porsche3 from "../../../public/images/porsche/porsche-3.jpg";

const Porsche = () => {
  return (
    <section className='min-h-screen bg-[#161a1e] text-white font-serif'>
      <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 pt-10 px-5 md:px-10 justify-center items-center'>
        <Image
          src={porsche1}
          className='rounded-lg w-full md:w-[700px] mt-5'
          alt='Car'
        />
        <div className='flex flex-col space-y-5 md:space-y-5'>
          <Image
            src={porsche2}
            className='rounded-lg w-full md:w-[330px]'
            alt='Car'
          />
          <Image
            src={porsche3}
            className='rounded-lg w-full md:w-[330px]'
            alt='Car'
          />
        </div>
      </div>
      <div className='flex flex-col space-y-5 pt-5 justify-center items-center'>
        <p className='font-mono text-2xl md:text-6xl'>Porsche 911 GT3 RS</p>
        <p className='font-mono text-xl md:text-4xl'>$215,000</p>
        <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 pb-16'>
          <button className='bg-slate-500 hover:bg-slate-700 rounded-lg py-5 px-8 md:px-14 text-white '>
            View Details
          </button>
          <button className='bg-orange-500 hover:bg-orange-700 rounded-lg py-4 px-8 md:px-16 text-white'>
            Buy Now
          </button>
        </div>
      </div>
      <div className='bg-gray-600 h-0.5 mx-5 md:mx-56' />
      <div className='flex flex-col items-center justify-center py-14'>
        <p className='text-3xl font-serif pr-0 md:pr-[850px]'>Description</p>
        <p className='text-base mt-5 px-5 md:px-64 tracking-wide font-mono text-slate-300'>
          The Porsche 911 GT3 RS is a true masterpiece of engineering, blending
          raw power and uncompromising performance with the iconic heritage of
          Porsche. Crafted with meticulous attention to detail, this track-bred
          sports car boasts a high-revving naturally aspirated 4.0-liter
          flat-six engine that delivers an exhilarating 525 horsepower. Its
          lightweight, aerodynamically optimized body is adorned with functional
          components that enhance downforce and stability at high speeds. The
          interior is a purposeful sanctuary, designed with race-inspired
          elements and premium materials that prioritize driver engagement. The
          911 GT3 RS is a true driver&apos;s car, offering an unparalleled
          experience for those who crave the thrill of pure, unadulterated
          performance.
        </p>
        <div className='flex flex-col justify-center items-center space-y-5 pt-10'>
          <h2 className='text-3xl font-serif pr-0 md:pr-[830px]'>
            Key Features
          </h2>
          <div className='text-lg text-slate-300 pr-5 md:pr-[350px] pb-10'>
            <div>
              <strong>• Chassis:</strong> Lightweight Aluminum-Steel Hybrid
              Construction
            </div>
            <div>
              <strong>• Engine:</strong> 4.0-liter Naturally Aspirated Flat-Six
              (525 horsepower)
            </div>
            <div>
              <strong>• Aerodynamics:</strong> Functional Aerodynamic Package
            </div>
            <strong>• Suspension:</strong> Rear-Axle Steering and Dynamic Engine
            Mounts
            <div>
              <strong>• Upholstery:</strong> Race-Inspired Sport Seats
            </div>
            <div>
              <strong>• Interior Trim:</strong> Alcantara and Carbon Fiber
              Accents
            </div>
            <div>
              <strong>• Safety Systems:</strong> Porsche Stability Management
              (PSM)
            </div>
            <div>
              <strong>• Braking System:</strong> Ceramic Composite Brakes
            </div>
          </div>
          <button className='bg-orange-500 hover:bg-orange-700 rounded-lg py-4 px-8 md:px-16 text-white my-10'>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Porsche;
