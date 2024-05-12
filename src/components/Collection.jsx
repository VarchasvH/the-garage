import Image from "next/image";
import porsche from "../../public/images/collection/porsche.jpg";
import lamborghini from "../../public/images/collection/lamborghini.jpg";
import mclaren from "../../public/images/collection/mclaren.jpg";
import nissan from "../../public/images/collection/nissan.jpg";

const Collection = () => {
  return (
    <section
      //161a1e
      className='bg-[#161a1e] min-h-screen flex flex-col justify-center items-center '
      id='collection'
    >
      <div className='flex flex-col items-center justify-start mb-16'>
        <h1 className='font-serif text-6xl font-bold tracking-wider text-orange-500'>
          {" "}
          Browse our Collection
        </h1>
        <p className='font-serif mt-6 text-xl px-96 tracking-wide'>
          Choose from an exceptional array of luxury vehicles from renowned
          automotive marques, meticulously curated to offer the ultimate in
          premium driving experiences.
        </p>
      </div>

      <div className='flex space-x-5 px-14'>
        <div className='flex flex-col bg-[#252a30] rounded-xl hover:bg-[#111315] pr-4 py-4'>
          <Image
            className=' rounded-2xl ml-4'
            src={porsche}
            alt='right image'
            width={300}
            height={300}
          />
          <div className='bg-gray-600 h-0.5 mt-8 ml-3' />
          <div className='mt-5'>
            <text className='font-mono pr-12 pl-16 text-xl'>
              Porsche 911 GT3 RS
            </text>
            <info className='grid grid-cols-4 divide-x-[1px] divide-gray-600 mt-5'>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600'>Year</p>
                <p className='text-sm'>2020</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600'>Fuel Type</p>
                <p className='text-sm'>Gasoline</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600 '>Mode</p>
                <p className='text-sm px-2'>Automatic</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600 '>Mileage</p>
                <p className='text-sm '>120 mi</p>
              </div>
            </info>
            <p className='text-lg mt-7  mx-28 font-mono text-orange-500'>
              $130,000
            </p>
          </div>
        </div>
        <div className='flex flex-col bg-[#252a30] rounded-xl hover:bg-[#111315]  pr-4 py-4'>
          <Image
            className=' rounded-2xl ml-4'
            src={lamborghini}
            alt='right image'
            width={300}
            height={300}
          />
          <div className='bg-gray-600 h-0.5 mt-5 ml-3' />
          <div className='mt-5'>
            <text className='font-mono px-7 text-xl'>
              Lamborghini Hurracan Evo
            </text>
            <info className='grid grid-cols-4 divide-x-[1px] divide-gray-600 mt-5'>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600'>Year</p>
                <p className='text-sm'>2021</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600'>Fuel Type</p>
                <p className='text-sm'>Gasoline</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600 '>Mode</p>
                <p className='text-sm px-2'>Automatic</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600 '>Mileage</p>
                <p className='text-sm '>90 mi</p>
              </div>
            </info>
            <p className='text-lg mt-7  mx-28 font-mono text-orange-500'>
              $240,000
            </p>
          </div>
        </div>
        <div className='flex flex-col bg-[#252a30] rounded-xl hover:bg-[#111315]  pr-4 py-4'>
          <Image
            className=' rounded-2xl ml-4'
            src={mclaren}
            alt='right image'
            width={300}
            height={300}
          />
          <div className='bg-gray-600 h-0.5 mt-5 ml-3' />
          <div className='mt-5'>
            <text className='font-mono pl-24 pr-20 text-xl'>McLaren 720S</text>
            <info className='grid grid-cols-4 divide-x-[1px] divide-gray-600 mt-5'>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600'>Year</p>
                <p className='text-sm'>2022</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600'>Fuel Type</p>
                <p className='text-sm'>Gasoline</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600 '>Mode</p>
                <p className='text-sm px-2'>Automatic</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600 '>Mileage</p>
                <p className='text-sm '>260 mi</p>
              </div>
            </info>
            <p className='text-lg mt-7 mx-28 font-mono text-orange-500'>
              $330,000
            </p>
          </div>
        </div>
        <div className='flex flex-col bg-[#252a30] rounded-xl hover:bg-[#111315]  pr-4 py-4'>
          <Image
            className=' rounded-2xl ml-4'
            src={nissan}
            alt='right image'
            width={300}
            height={300}
          />
          <div className='bg-gray-600 h-0.5 mt-5' />
          <div className='mt-5'>
            <text className='font-mono pr-10 pl-20 text-xl'>
              Nissan GTR R-35
            </text>
            <info className='grid grid-cols-4 divide-x-[1px] divide-gray-600 mt-5'>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600'>Year</p>
                <p className='text-sm'>2023</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600'>Fuel Type</p>
                <p className='text-sm'>Gasoline</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600 '>Mode</p>
                <p className='text-sm px-2'>Automatic</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-xs text-gray-600 '>Mileage</p>
                <p className='text-sm '>270 mi</p>
              </div>
            </info>
            <p className='text-lg mt-7 mx-28 font-mono text-orange-500'>
              $190,000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
