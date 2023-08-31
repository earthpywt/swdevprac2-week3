import Link from 'next/link';

export default function TopMenuItem ({title, pageRef} : {title:string, pageRef:string}){
    return (
        <Link href={pageRef} className='w-[120px] text-center my-auto text-gray-600'>
            {title}
        </Link>
    );

}