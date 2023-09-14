"use client";
import { useReducer } from "react";
import ProductCard from "./ProductCard";

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
                <ProductCard
                    hospitalName="Chulalongkorn Hospital"
                    imgSrc="/img/chula.jpg"
                    onCompare={(name: string, value: number) =>
                        dispatchCompare({
                            type: "add",
                            hospitalName: name,
                            hospitalRating: value,
                        })
                    }
                />
                <ProductCard
                    hospitalName="Rajavithi Hospital"
                    imgSrc="/img/rajavithi.jpg"
                    onCompare={(name: string, value: number) =>
                        dispatchCompare({
                            type: "add",
                            hospitalName: name,
                            hospitalRating: value,
                        })
                    }
                />
                <ProductCard
                    hospitalName="Thammasat University Hospital"
                    imgSrc="/img/thammasat.jpg"
                    onCompare={(name: string, value: number) =>
                        dispatchCompare({
                            type: "add",
                            hospitalName: name,
                            hospitalRating: value,
                        })
                    }
                />
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
