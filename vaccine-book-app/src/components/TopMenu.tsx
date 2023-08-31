// import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu () {
    return (
        <div className='h-[50px] bg-white fixed top-0 inset-x-0 z-30 border-y-1 border-gray-400 border-solid flex flex-row justify-end'>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            <Image src={'/img/medical-5459653_640.png'} className='h-full w-auto' alt='logo' width={0} height={0} sizes='100vh'/>
            
            
        </div>
    );
}