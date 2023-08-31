import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'} 
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-bold'>Vaccination Service</h1>
                <h3 className='text-xl'>Protecting Health, Empowering Communities</h3>
            </div>
        </div>
    );
}