import Image from "next/image";
import car from "../../public/images/ratings.jpg";
import star from "../../public/images/ratings.png";

const Ratings = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${car.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
      className='flex flex-col justify-center items-center font-serif text-white'
    >
      <text className='text-4xl bg-stone-950 bg-opacity-50 p-4 rounded-lg '>
        {" "}
        What our customers say
      </text>
      <div className='flex '>
        <div className=' flex flex-col backdrop-blur-2xl mx-48 py-5 my-7 rounded-lg'>
          <p className='pl-5 pr-3 '>
            Exceptional service! Purchased a Porsche 911, smooth process, and
            the car exceeds expectation. Highly Recommended!
          </p>
          <p className='mt-5 pl-5 text-sm text-gray-400'>Johnny Silverhand</p>
          <Image alt='stars' src={star} width={150} className='pl-2' />
        </div>
        <div className='flex flex-col backdrop-blur-2xl mx-48 py-5 my-7 rounded-lg'>
          <p className='px-5'>
            The Garage made getting my new Cayenne Coupe GTS an awesome
            experience. Wonderful staff, great selection, and top-notch service.
          </p>
          <p className='mt-5 pl-5 text-sm text-gray-400'>Sekiro Wolf</p>
          <Image alt='stars' src={star} width={150} className='pl-2' />
        </div>
      </div>
      <div className='flex  '>
        <div className=' flex flex-col backdrop-blur-2xl mx-48 py-5 my-7 rounded-lg'>
          <p className='px-5 '>
            Just took delivery of a gorgeous Taycan Turbo S from The Garage.
            First-class operation from start to finish. They treat Porsche fans
            right!
          </p>
          <p className='mt-5 pl-5 text-sm text-gray-400'>Arthur Morgan</p>
          <Image alt='stars' src={star} width={150} className='pl-2' />
        </div>
        <div className=' flex flex-col backdrop-blur-2xl mx-48 py-5 my-7 rounded-lg'>
          <p className='px-5'>
            The Garage is the place for exotic cars! I&apos;m over the moon with
            my new Lamborghini Huracan Performante purchased from them. Out of
            this world service.
          </p>
          <p className='mt-5 pl-5 text-sm text-gray-400'>Tommy Vercetti</p>
          <Image alt='stars' src={star} width={150} className='pl-2' />
        </div>
      </div>
    </section>
  );
};

export default Ratings;
