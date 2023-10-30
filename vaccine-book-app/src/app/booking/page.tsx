"use client";
import LocationDateReserve from "@/components/LocationDateReserve";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addReservation } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../interfaces";
import { useSession } from "next-auth/react";

const Booking = () => {
    const { data: session } = useSession();
    const [profile, setProfile] = useState(null);
    const [createdAt, setCreatedAt] = useState<Date | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (session) {
                const userProfile = await getUserProfile(session.user.token);
                //const createdAt = new Date(profile.data.createdAt);
                setProfile(userProfile);
                setCreatedAt(new Date(userProfile.data.createdAt));
            }
        };
        fetchData();
    }, [session]);

    const dispatch = useDispatch<AppDispatch>();

    const makeBooking = () => {
        if (fName && lName && PId && pickupDate && pickupLocation) {
            const item: BookingItem = {
                firstName: fName,
                lastName: lName,
                patientId: PId,
                hospital: pickupLocation,
                vaccineDate: dayjs(pickupDate).format("YYYY/MM/DD"),
            };
            dispatch(addReservation(item));
        }
    };

    const [fName, setFirstname] = useState<string>("");
    const [lName, setLastname] = useState<string>("");
    const [PId, setPatientId] = useState<string>("");

    const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
    const [pickupLocation, setPickupLocation] = useState<string>("BKK");

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            {session && profile && createdAt ? (
                <div>
                    <div className="text-2xl">{profile.data.name}</div>
                    <table className="table-auto border-separate border-spacing-2">
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td>{profile.data.email}</td>
                            </tr>
                            <tr>
                                <td>Tel.</td>
                                <td>{profile.data.tel}</td>
                            </tr>
                            <tr>
                                <td>Member since</td>
                                <td>{createdAt.toString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : null}
            <div className="text-2xl font-medium py-10">New Reservation</div>
            <div className="w-fit space-y-2">
                <div className="flex flex-row">
                    <div className="pr-10">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 "
                        >
                            ชื่อ
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="rounded block flex-1 border-0 bg-gray-800 py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="surname"
                            className="block text-sm font-medium leading-6"
                        >
                            นามสกุล
                        </label>
                        <input
                            type="text"
                            name="surname"
                            id="surname"
                            className="rounded block flex-1 border-0 bg-gray-800 py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                </div>
                <label
                    htmlFor="id"
                    className="block text-sm font-medium leading-6"
                >
                    รหัสประจำตัวประชาชน
                </label>
                <input
                    type="text"
                    name="id"
                    id="id"
                    className="rounded block flex-1 border-0 bg-gray-800 py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={(e) => setPatientId(e.target.value)}
                />
                <div className="text-md text-left">
                    Pick-up date and location
                </div>
                <LocationDateReserve
                    onDateChange={(value: Dayjs) => {
                        setPickupDate(value);
                    }}
                    onLocationChange={(value: string) =>
                        setPickupLocation(value)
                    }
                />
                <button
                    className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
            shadow-sm text-white"
                    onClick={makeBooking}
                >
                    จองวัคซีน
                </button>
            </div>
        </main>
    );
};

export default Booking;
