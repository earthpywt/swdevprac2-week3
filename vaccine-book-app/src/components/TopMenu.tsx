// import styles from './topmenu.module.css'
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenu() {
    const session = await getServerSession(authOptions);
    return (
        <div className="h-[50px] bg-white fixed top-0 inset-x-0 z-30 border-y-1 border-gray-400 border-solid flex flex-row justify-end">
            <div>
                {session ? (
                    <Link href="/api/auth/signout">
                        <div className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm">
                            Sign-Out of {session.user?.name}
                        </div>
                    </Link>
                ) : (
                    <Link href="/api/auth/signin">
                        <div className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm">
                            Sign-In
                        </div>
                    </Link>
                )}
            </div>

            <TopMenuItem title="Booking" pageRef="/booking" />
            <Image
                src={"/img/medical-5459653_640.png"}
                className="h-full w-auto"
                alt="logo"
                width={0}
                height={0}
                sizes="100vh"
            />
        </div>
    );
}
