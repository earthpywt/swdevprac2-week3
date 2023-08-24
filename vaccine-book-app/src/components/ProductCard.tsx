import styles from './productcard.module.css'
import Image from 'next/image';

export default function ProductCard () {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/cardimg1.jpg'}
                alt='Product Picture'
                fill={true}
                objectFit='cover'/>
            </div>
            <div className={styles.cardtext}>วัคซีน (Vaccine) คือสารชนิดหนึ่งที่ฉีดเข้าไปร่างกาย เพื่อสร้างภูมิคุ้มกันโรคต่างๆ</div>
        </div>
    )
}