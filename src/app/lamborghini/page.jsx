import Image from "next/image";
import huracanEvo1 from "../../../public/images/lamborghini/hurracan-evo-1.jpg";
import huracanEvo2 from "../../../public/images/lamborghini/hurracan-evo-2.jpg";
import huracanEvo3 from "../../../public/images/lamborghini/hurracan-evo-3.jpg";
import Link from "next/link";

const LamborghiniHuracanEvo = () => {
  return (
    <section className='min-h-screen bg-[#161a1e] text-white font-serif'>
      <div className='flex md:flex-row flex-col space-y-5 md:space-x-5 pt-10 px-10 justify-center items-center'>
        <Image
          src={huracanEvo1}
          className='rounded-lg w-[200px] sm:w-[760px] mt-5'
          alt='Car'
        />
        <div className='flex flex-col space-y-5'>
          <Image
            src={huracanEvo2}
            className='rounded-lg w-[200px] sm:w-[330px]'
            alt='Car'
          />
          <Image
            src={huracanEvo3}
            className='rounded-lg w-[200px] sm:w-[330px]'
            alt='Car'
          />
        </div>
      </div>
      <div className='flex flex-col space-y-5 pt-5 justify-center items-center '>
        <p className='font-mono text-2xl md:text-6xl'>
          Lamborghini Huracan Evo
        </p>
        <p className='font-mono text-xl md:text-4xl'>$261,274</p>
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
      <div
        className='flex flex-col items-center justify-center py-14'
        id='details'
      >
        <p className='text-3xl font-serif pr-[850px]'>Description</p>
        <p className='text-base mt-5 px-64 tracking-wide font-mono text-slate-300'>
          The Lamborghini Huracan Evo represents the pinnacle of automotive
          passion and performance, featuring stunning design and exhilarating
          driving dynamics. Crafted with meticulous attention to detail and
          Italian flair, the Huracan Evo boasts a captivating and
          aerodynamically optimized silhouette that embodies modern
          sophistication and aggressive styling cues. Inside the cockpit,
          you&apos;ll find a luxurious interior adorned with premium materials,
          including fine leather and sleek carbon fiber accents. The driving
          experience is electrifying, powered by a formidable 5.2-liter
          naturally aspirated V10 engine that delivers breathtaking acceleration
          and an unforgettable soundtrack. This supercar seamlessly marries
          comfort with uncompromising performance, offering an extraordinary
          driving experience for enthusiasts and connoisseurs alike.
        </p>
        <div className='flex flex-col justify-center items-center space-y-5 pt-10'>
          <h2 className='text-3xl font-serif pr-[850px]'>Key Features</h2>
          <div className='flex flex-col text-lg text-slate-300 pr-[200px] pb-10'>
            <div>
              <strong>• Chassis:</strong> Lightweight Carbon Fiber Monocoque
              Chassis
            </div>
            <div>
              <strong>• Engine:</strong> 5.2-liter Naturally Aspirated V10 (600+
              horsepower)
            </div>
            <div>
              <strong>• Aerodynamics:</strong> Active Aerodynamic Enhancements
              for Maximum Downforce
            </div>
            <div>
              <strong>• Suspension:</strong> Magnetorheological Adaptive Damping
              System
            </div>
            <div>
              <strong>• Interior:</strong> Luxurious Alcantara and Leather
              Upholstery with Carbon Fiber Trim
            </div>
            <div>
              <strong>• Infotainment:</strong> Advanced Touchscreen Interface
              with Smartphone Integration
            </div>
            <div>
              <strong>• Driver Assistance:</strong> Lamborghini Dinamica Veicolo
              Integrata (LDVI) System
            </div>
            <div>
              <strong>• Braking System:</strong> High-Performance Carbon-Ceramic
              Brake Discs for Precision
            </div>
          </div>
          <Link href='/lamborghini'>
            <button className='bg-orange-500 hover:bg-orange-700 rounded-lg py-4 px-16 text-white my-10'>
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LamborghiniHuracanEvo;
