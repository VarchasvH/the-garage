import Image from "next/image";

import india from "../../public/images/india-flag.svg";
import phoneIcon from "../../public/images/phone-icon.svg";
import homeIcon from "../../public/images/home-icon.svg";

const Navbar = () => {
  return (
    <>
      <nav className=' bg-[#0d0d0d] bg-opacity-70 py-3 flex justify-between items-center px-28 font-serif font-light'>
        <div className='flex items-center text-sm'>
          <div className='flex gap-4 '>
            <Image src={phoneIcon} alt='Phone Icon' width={25} height={25} />
            <p className='font-sans font-semibold mt-0.5'>012-345-6789</p>
          </div>
          <div className='flex '>
            <Image
              src={homeIcon}
              alt='Home Icon'
              width={25}
              height={25}
              className='ml-12'
            />
            <p className='font-semibold mt-1 ml-3.5'>New Delhi, India</p>
          </div>
        </div>
        <div className=' text-3xl mr-60'>The Garage</div>
        <Image
          src={india}
          alt='India Flag'
          width={30}
          height={30}
          className='mr-10'
        />
      </nav>
    </>
  );
};

export default Navbar;
