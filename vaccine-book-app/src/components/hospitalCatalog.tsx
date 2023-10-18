import ProductCard from "./ProductCard";
import Link from "next/link";

export default async function HospitalCatalog({
    hospitalJson,
}: {
    hospitalJson: Object;
}) {
    const hostpitalJsonReady = await hospitalJson;
    return (
        <>
            Explore {hostpitalJsonReady.count} hospitals in our catalog
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
                {hostpitalJsonReady.data.map((hospitalItem: Object) => (
                    <Link
                        href={`hospital/${hospitalItem.id}`}
                        className="w-1/5"
                    >
                        <ProductCard
                            hospitalName={hospitalItem.name}
                            imgSrc={hospitalItem.picture}
                        />
                    </Link>
                ))}
            </div>
        </>
    );
}
