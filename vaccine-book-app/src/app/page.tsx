import Image from "next/image";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";

export default function Home() {
    return (
        // <main className={styles.main}>
        <main>
            <Banner />
        </main>
    );
}
