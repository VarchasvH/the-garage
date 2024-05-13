import Image from "next/image";
import nissan1 from "../../../public/images/nissan/nissan-1.jpg";
import nissan2 from "../../../public/images/nissan/nissan-2.jpg";
import nissan3 from "../../../public/images/nissan/nissan-3.jpg";

const Gtr = () => {
  return (
    <section className='min-h-screen bg-[#161a1e] text-white font-serif'>
      <div className='flex md:flex-row flex-col space-y-5 md:space-x-5 pt-10 px-10 justify-center items-center'>
        <Image
          src={nissan1}
          className='rounded-lg w-[200px] sm:w-[700px] mt-5'
          alt='Car'
        />
        <div className='flex flex-col space-y-5'>
          <Image
            src={nissan2}
            className='rounded-lg w-[200px] sm:w-[330px]'
            alt='Car'
          />
          <Image
            src={nissan3}
            className='rounded-lg w-[200px] sm:w-[330px]'
            alt='Car'
          />
        </div>
      </div>
      <div className='flex flex-col space-y-5 pt-5 justify-center items-center'>
        <p className='font-mono text-2xl md:text-6xl'>Nissan GT-R</p>
        <p className='font-mono text-xl md:text-4xl'>$113,000</p>
        <div className='flex md:flex-row flex-col space-y-5 md:space-x-5 pb-16'>
          <button className='bg-slate-500 hover:bg-slate-700 rounded-lg py-5 px-14 text-white mt-5'>
            View Details
          </button>
          <button className='bg-orange-500 hover:bg-orange-700 rounded-lg py-4 px-16 text-white mt-5'>
            Buy Now
          </button>
        </div>
      </div>
      <div className='bg-gray-600 h-0.5 mx-56' />
      <div className='flex flex-col items-center justify-center py-14'>
        <p className='text-3xl font-serif pr-[850px]'>Description</p>
        <p className='text-base mt-5 px-64 tracking-wide font-mono text-slate-300'>
          The Nissan GT-R is a true embodiment of performance engineering,
          blending cutting-edge technology with raw power and precision
          handling. This supercar is a masterpiece of Japanese automotive
          craftsmanship, boasting a hand-built 3.8-liter twin-turbocharged V6
          engine that delivers an awe-inspiring 565 horsepower. Its sleek,
          aerodynamic body is not just visually striking but also functional,
          enhancing downforce and stability at high speeds. The interior is a
          driver-focused cockpit, meticulously designed with premium materials
          and race-inspired elements. The GT-R is a true performance icon,
          offering an exhilarating driving experience that leaves an indelible
          mark on everyone who experiences its raw power and agility.
        </p>
        <div className='flex flex-col justify-center items-center space-y-5 pt-10'>
          <h2 className='text-3xl font-serif pr-[830px]'>Key Features</h2>
          <div className='text-lg text-slate-300 pr-[350px] pb-10'>
            <div>
              <strong>• Chassis:</strong> Advanced Aluminum-Alloy Body
              Construction
            </div>
            <div>
              <strong>• Engine:</strong> 3.8-liter Twin-Turbocharged V6 (565
              horsepower)
            </div>
            <div>
              <strong>• Aerodynamics:</strong> Functional Aerodynamic Design
            </div>
            <strong>• Suspension:</strong> Bilstein DampTronic Suspension System
            <div>
              <strong>• Upholstery:</strong> Premium Leather-Appointed Seats
            </div>
            <div>
              <strong>• Interior Trim:</strong> Alcantara and Carbon Fiber
              Accents
            </div>
            <div>
              <strong>• Safety Systems:</strong> Nissan/Infiniti Vehicle Dynamic
              Control (VDC)
            </div>
            <div>
              <strong>• Braking System:</strong> High-Performance Brembo Brakes
            </div>
          </div>
          <button className='bg-orange-500 hover:bg-orange-700 rounded-lg py-4 px-16 text-white my-10'>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gtr;
