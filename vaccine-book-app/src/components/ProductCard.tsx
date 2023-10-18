"use client";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function ProductCard({
    hospitalName,
    imgSrc,
    onCompare,
}: {
    hospitalName: string;
    imgSrc: string;
    onCompare?: Function;
}) {
    const [value, setValue] = useState(0);
    return (
        <InteractiveCard>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image
                    src={imgSrc}
                    alt="Product Picture"
                    fill={true}
                    className="object-cover rounded-t-lg"
                />
            </div>
            <div className="w-full h-[30%] p-[10px] text-black">
                {hospitalName}
            </div>
            {onCompare ? (
                <Rating
                    precision={0.5}
                    value={value}
                    onChange={(event, newValue) => {
                        if (newValue !== null) {
                            setValue(newValue);
                            onCompare(hospitalName, newValue);
                        }
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                />
            ) : (
                ""
            )}
        </InteractiveCard>
    );
}
