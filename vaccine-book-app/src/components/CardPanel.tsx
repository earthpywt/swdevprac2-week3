"use client";
import { useReducer } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function CardPanel() {
    const compareReducer = (
        compareMap: Map<string, number>,
        action: { type: string; hospitalName: string; hospitalRating: number }
    ) => {
        switch (action.type) {
            case "add": {
                return new Map(
                    compareMap.set(action.hospitalName, action.hospitalRating)
                );
            }
            case "remove": {
                compareMap.delete(action.hospitalName);
                return new Map(compareMap);
            }
            default:
                return compareMap;
        }
    };

    const [compareMap, dispatchCompare] = useReducer(
        compareReducer,
        new Map<string, number>()
    );

    const mockHospitalRepo = [
        { hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg" },
        { hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" },
        {
            hid: "003",
            name: "Thammasat University Hospital",
            image: "/img/thammasat.jpg",
        },
    ];

    return (
        <div>
            <div
                style={{
                    margin: "20px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignContent: "space-around",
                }}
            >
                {mockHospitalRepo.map((hospitalItem) => (
                    <Link
                        href={`hospital/${hospitalItem.hid}`}
                        className="w-1/5"
                    >
                        <ProductCard
                            hospitalName={hospitalItem.name}
                            imgSrc={hospitalItem.image}
                            onCompare={(name: string, value: number) =>
                                dispatchCompare({
                                    type: "add",
                                    hospitalName: name,
                                    hospitalRating: value,
                                })
                            }
                        />
                    </Link>
                ))}
            </div>
            <div className="w-full text-xl font-medium">Hospital Rating</div>
            {Array.from(compareMap).map(([name, rating]) => (
                <div
                    key={name}
                    onClick={() =>
                        dispatchCompare({
                            type: "remove",
                            hospitalName: name,
                            hospitalRating: rating,
                        })
                    }
                >
                    {name} Rating = {rating}
                </div>
            ))}
        </div>
    );
}
