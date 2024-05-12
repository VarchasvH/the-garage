import Link from "next/link";
import bgImage from "../../public/images/hero-image.jpg";
const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
      className='flex flex-col justify-center items-center'
    >
      <text className='text-7xl bg-neutral-950 bg-opacity-70 px-64'>
        Every journey becomes an experience with a car.
      </text>
      <Link href='#collection'>
        <button className='bg-orange-500 rounded-lg py-4 px-6 mt-32'>
          View our collection
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
