import Image from "next/image";
import mclaren1 from "../../../public/images/mclaren/mclaren-1.jpg";
import mclaren2 from "../../../public/images/mclaren/mclaren-2.jpg";
import mclaren3 from "../../../public/images/mclaren/mclaren-3.jpg";

const Mclaren = () => {
  return (
    <section className=' min-h-screen bg-[#161a1e] text-white font-serif'>
      <div className='flex md:flex-row flex-col space-y-5 md:space-x-5 pt-10 px-10 justify-center items-center'>
        <Image
          src={mclaren1}
          className='rounded-lg w-[200px] sm:w-[700px] mt-5'
          alt='Car'
        />
        <div className='flex flex-col space-y-5'>
          <Image
            src={mclaren2}
            className=' rounded-lg w-[200px] sm:w-[330px] '
            alt='Car'
          />
          <Image
            src={mclaren3}
            className=' rounded-lg w-[200px] sm:w-[330px]'
            alt='Car'
          />
        </div>
      </div>
      <div className='flex flex-col space-y-5 pt-5 justify-center items-center '>
        <p className='font-mono text-2xl md:text-6xl'>McLaren 720S</p>
        <p className='font-mono text-xl md:text-4xl'>$330,000</p>
        <div className='flex md:flex-row flex-col space-y-5 md:space-x-5 pb-16'>
          <button className='bg-slate-500 hover:bg-slate-700 rounded-lg py-5 px-14  text-white mt-5'>
            View Details
          </button>
          <button className='bg-orange-500 hover:bg-orange-700 rounded-lg py-4 px-16  text-white mt-5'>
            Buy Now
          </button>
        </div>
      </div>
      <div className='bg-gray-600 h-0.5 mx-56' />
      <div className='flex flex-col items-center justify-center py-14'>
        <p className='text-3xl font-serif pr-[850px]'>Description</p>
        <p className='text-base mt-5 px-64 tracking-wide font-mono text-slate-300'>
          The McLaren 720S epitomizes automotive luxury with its blend of
          opulent design and cutting-edge performance. Crafted with precision
          and artistry, the 720S boasts a sleek, aerodynamically optimized
          silhouette that embodies modern sophistication. Its interior is a
          sanctuary of refined elegance, adorned with premium materials like
          supple leather and polished metals. The driving experience is nothing
          short of exhilarating, courtesy of a potent 4.0-liter
          twin-turbocharged V8 engine delivering 710 horsepower. This luxurious
          supercar marries comfort with unparalleled performance, making every
          journey an indulgent affair for those with a taste for the
          extraordinary.
        </p>
        <div className='flex flex-col justify-center items-center space-y-5 pt-10'>
          <h2 className='text-3xl font-serif pr-[830px] '>Key Features</h2>
          <div className='text-lg text-slate-300 pr-[350px] pb-10'>
            <div>
              <strong>• Chassis:</strong> Lightweight Carbon Fiber Monocoque
              Chassis
            </div>
            <div>
              <strong>• Engine:</strong> 4.0-liter Twin-Turbocharged V8 (710
              horsepower)
            </div>
            <div>
              <strong>• Aerodynamics:</strong> Active Aerodynamic Design
            </div>
            <strong>• Suspension:</strong> Adaptive Suspension with Proactive
            Chassis Control
            <div>
              <strong>• Upholstery:</strong> Luxurious Leather Upholstery
            </div>
            <div>
              <strong>• Interior Trim:</strong> Carbon Fiber and Aluminum
              Interior Accents
            </div>
            <div>
              <strong>• Safety Systems:</strong> Traction Control and Stability
              Management Systems
            </div>
            <div>
              <strong>• Braking System:</strong> High-Performance Carbon-Ceramic
              Braking System
            </div>
          </div>
          <button className='bg-orange-500 hover:bg-orange-700 rounded-lg py-4 px-16  text-white my-10'>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mclaren;
