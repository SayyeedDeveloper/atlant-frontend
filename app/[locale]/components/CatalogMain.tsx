'use client'
import { useState } from "react";
import { Grid, List } from "lucide-react";

const products = [
    {
        id: 1,
        name: "Система обратного осмоса HLDRO-1000LPH (VOLARDDА)",
        price: "45 928 500 сум",
        status: "В наличии",
        image: "/water1.png"
    },
    {
        id: 2,
        name: "Система обратного осмоса AF-500A",
        price: "32 218 500 сум",
        status: "В наличии",
        image: "/water2.png"
    },
    {
        id: 3,
        name: "Система обратного осмоса HLDRO-250LPH (VOLARDDА)",
        price: "14 395 500 сум",
        status: "В наличии",
        image: "/water3.png"
    }
];

export default function FiltersPage() {
    const [view, setView] = useState("list");

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">

            <h1 className="text-3xl font-bold mb-6">Фильтры очистки воды</h1>


            <div className="flex items-center justify-between mb-6">
                <div className="flex gap-3">
                    <button
                        onClick={() => setView("grid")}
                        className={`p-2 rounded-full border ${view === "grid" ? "bg-blue-600 text-white" : "bg-white"}`}
                    >
                        <Grid size={20} />
                    </button>
                    <button
                        onClick={() => setView("list")}
                        className={`p-2 rounded-full border ${view === "list" ? "bg-blue-600 text-white" : "bg-white"}`}
                    >
                        <List size={20} />
                    </button>
                </div>
            </div>


            <div
                className={
                    view === "grid"
                        ? "grid md:grid-cols-2 gap-6"
                        : "flex flex-col gap-6"
                }
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white p-4 border rounded-xl flex gap-4 shadow-sm"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-32 h-32 object-cover rounded-lg"
                        />

                        <div className="flex flex-col justify-between w-full">
                            <div>
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p className="text-green-600 font-medium mt-1">{product.status}</p>
                                <p className="text-xl font-bold mt-2">{product.price}</p>
                            </div>


                            <div className="flex gap-3 mt-3">
                                <button className="px-6 py-2 bg-blue-600 text-white rounded-full">
                                    Купить
                                </button>
                                <button className="px-6 py-2 border rounded-full">
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
