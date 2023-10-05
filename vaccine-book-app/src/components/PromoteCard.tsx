"use client";
import { VideoPlayer } from "./VideoPlayer";
import { useState } from "react";
import { Rating } from "@mui/material";
import { useWindowListener } from "@/hooks/useWindowListener";

export function PromoteCard() {
    const [playing, setPlaying] = useState(true);
    const [rating, setRating] = useState(0);

    useWindowListener("contextmenu", (e) => {
        e.preventDefault();
    });

    return (
        <div
            className="w-[80%} shadow-lg mx-[10%] my-10 p-22 rounded-lg bg-gray-200 
        flex flex-row"
        >
            <VideoPlayer
                isPlaying={playing}
                vdoSrc="/video/getvaccine.mp4"
            ></VideoPlayer>
            <div className="m-5 text-black">
                Get your vaccine today.
                <button
                    className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
            shadow-sm text-white"
                    onClick={() => setPlaying(!playing)}
                >
                    {playing ? "Pause" : "Play"}
                </button>
                <Rating
                    className="w-full h-[10%]"
                    value={rating == undefined ? 0 : rating}
                    onChange={(e, newValue) => {
                        if (newValue != null) setRating(newValue);
                    }}
                />
            </div>
        </div>
    );
}
