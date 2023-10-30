import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookState = {
    bookItems: BookingItem[];
};

const initialState: BookState = { bookItems: [] };

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<BookingItem>) => {
            if (state.bookItems.length > 0) {
                state.bookItems.pop();
            }
            state.bookItems.push(action.payload);
        },
        removeReservation: (state, action: PayloadAction<BookingItem>) => {
            const remainItems = state.bookItems.filter((obj) => {
                return (
                    obj.patientId !== action.payload.patientId ||
                    obj.hospital !== action.payload.hospital ||
                    obj.vaccineDate !== action.payload.vaccineDate
                );
            });
            state.bookItems = remainItems;
        },
    },
});

export const { addReservation, removeReservation } = bookSlice.actions;
export default bookSlice.reducer;
