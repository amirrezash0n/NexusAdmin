import { ProductsDataTable } from "@/components/panel/ProductDataTable";

// در کامپوننت والد
const sampleProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    category: "Electronics",
    rating: 4.8,
    status: "active",
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 1299,
    category: "Computers",
    rating: 4.9,
    status: "active",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 199,
    category: "Audio",
    rating: 4.5,
    status: "active",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 349,
    category: "Wearables",
    rating: 4.3,
    status: "draft",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 79,
    category: "Accessories",
    rating: 4.2,
    status: "inactive",
  },
];

export default function Users() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 px-4 md:gap-6 md:py-6">
          <ProductsDataTable data={sampleProducts} />
        </div>
      </div>
    </div>
  );
}
