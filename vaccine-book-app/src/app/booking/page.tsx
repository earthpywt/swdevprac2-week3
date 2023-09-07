import LocationDateReserve from "@/components/LocationDateReserve";
export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-2xl font-medium py-10">New Reservation</div>
            <div className="w-fit space-y-2">
                <div className="flex flex-row">
                    <div className="pr-10">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6"
                        >
                            ชื่อ
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="rounded block flex-1 border-0 bg-gray-800 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                            className="rounded block flex-1 border-0 bg-gray-800 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                    className="rounded block flex-1 border-0 bg-gray-800 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
                <div className="text-md text-left">
                    Pick-up date and location
                </div>
                <LocationDateReserve />
            </div>
            {/* <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
            shadow-sm text-white">Check car availability</button> */}
        </main>
    );
}
