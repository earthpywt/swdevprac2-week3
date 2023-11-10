import HospitalCatalog from "@/components/hospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockResult = {
    success: true,
    count: 2,
    data: [
        {
            _id: "652de55f7e4f3e04da4e420c",
            name: "Chulalongkorn Hospital",
            address: "1873 Rama IV Rd",
            district: "Pathum Wan",
            province: "Bangkok",
            postalcode: "10330",
            tel: "026494000",
            picture:
                "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
            __v: 0,
            id: "652de55f7e4f3e04da4e420c",
        },
        {
            _id: "652de5c17e4f3e04da4e420f",
            name: "Rajavithi Hospital",
            address: "2 Phaya Thai Rd, Thung Phaya Thai",
            district: "Ratchathewi",
            province: "Bangkok",
            postalcode: "10400",
            tel: "022062900",
            picture:
                "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
            __v: 0,
            id: "652de5c17e4f3e04da4e420f",
        },
    ],
};

describe("HospitalCatalog", () => {
    it("should have correct number of hospital images", async () => {
        const hospitalCatalog = await HospitalCatalog({
            hospitalJson: mockResult,
        });
        render(hospitalCatalog);
        await waitFor(() => {
            const hospitalImages = screen.queryAllByRole("img");
            expect(hospitalImages.length).toBe(2);
        });
    });
});
