import Image from "next/image";
import footerImg from "../../public/images/footer.jpg";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className='bg-orange-500'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='flex justify-center sm:justify-start font-serif text-2xl'>
            The Garage
          </div>

          <p className='mt-4 text-center text-sm  lg:mt-0 lg:text-right'>
            Made with love by{" "}
            <Link href='https://github.com/VarchasvH'>
              <text className='font-bold text-xl'>VarchasvH</text>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
