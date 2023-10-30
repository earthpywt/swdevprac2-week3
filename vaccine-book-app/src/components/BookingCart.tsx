"use client";
import { useAppSelector } from "@/redux/store";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
// import { removeReservation } from "@/redux/features/cartSlice";
import { removeReservation } from "@/redux/features/bookSlice";

export default function ReservationCart() {
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

    if (bookItems.length === 0) {
        return (
            <div className="flex justify-center items-center h-full py-10">
                No vaccine booking
            </div>
        );
    }
    return (
        <>
            {bookItems.map((bookingItem) => (
                <div
                    className="bg-slate-700 rounded px-5 mx-5 py-2 my-2"
                    key={bookingItem.firstName}
                >
                    <div className="text-xl">{bookingItem.lastName}</div>
                    <div className="text-sm ">
                        Pick-Up {bookingItem.vaccineDate} from{" "}
                        {bookingItem.hospital}
                    </div>

                    <button
                        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
            shadow-sm text-white"
                        onClick={() => dispatch(removeReservation(bookingItem))}
                    >
                        Remove from Booking
                    </button>
                </div>
            ))}
        </>
    );
}
