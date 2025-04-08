"use client";
import { IProduct } from "@/types";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    TooltipItem,
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
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" as const },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem: TooltipItem<"bar">) {
                        const label = tooltipItem.dataset.label || "";
                        const value = tooltipItem.raw as number; // `raw` contains the data value
                        return `${label}: $${value.toFixed(2)}`;
                    },
                    title: function (tooltipItems: TooltipItem<"bar">[]) {
                        const index = tooltipItems[0].dataIndex;
                        return `Product: ${products[index].title}`;
                    },
                },
            },
        },
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 pt-34">
            <h2 className="space-x-4 text-4xl font-bold text-center mb-24 text-black dark:text-white">
                <span>Products Price Chart</span>
                <ChartColumnIncreasing className="size-9 inline" />
            </h2>
            <div className="w-full h-[350px]">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}
