"use client";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
//import { useWindowListener } from "@/hooks/useWindowListener";
export function VideoPlayer({
    vdoSrc,
    isPlaying,
}: {
    vdoSrc: string;
    isPlaying: boolean;
}) {
    const vdoRef = useRef<HTMLVideoElement>(null);
    // useWindowListener("resize", (e) =>
    //     alert("window width is " + (e.target as Window).innerWidth)
    // );

    useEffect(() => {
        //alert("width is" + vdoRef.current?.videoWidth);
        if (isPlaying) {
            vdoRef.current?.play();
        } else {
            vdoRef.current?.pause();
        }
    }, [isPlaying]);

    return (
        <video
            className="w-[40%]"
            ref={vdoRef}
            src={vdoSrc}
            controls
            loop
            muted
        />
    );
}
