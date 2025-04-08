"use client";
import { IProduct } from "@/types";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";
import { ChartColumnIncreasing } from "lucide-react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ProductChart({ products }: { products: IProduct[] }) {
    const labels = products?.map((product: IProduct) => `${product.title.split(" ")[0]}...`);
    const prices = products?.map((product: IProduct) => product.price);

    const data = {
        labels,
        datasets: [
            {
                label: "Price",
                data: prices,
                backgroundColor: "oklch(0.623 0.214 259.815)",
                borderRadius: 6,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" as const },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        const label = context.dataset.label || "";
                        const value = context.parsed.y;
                        return `${label}: $${value.toFixed(2)}`;
                    },
                    title: function (context: any) {
                        const index = context[0].dataIndex;
                        return `Product: ${products.map((product: IProduct) => product.title)[index]}`;
                    },
                },
            },
        },
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 pt-34">
            <h2 className="flex items-center justify-center gap-4 text-4xl font-bold text-center mb-24 text-black dark:text-white">
                Products Price Chart
                <ChartColumnIncreasing className="size-9" />
            </h2>
            <Bar data={data} options={options} />
        </div>
    );
}
