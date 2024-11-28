"use client";
import ProductCard from "@/component/Product";
import { CategoriesType, ProductType } from "@/interface";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const CategoriesPage = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesData, productsData] = await Promise.all([
          axios.get("https://9fd0d88e6d8305b1.mokky.dev/categories"),
          axios.get("https://9fd0d88e6d8305b1.mokky.dev/products"),
        ]);
        setCategories(categoriesData.data);
        setProducts(productsData.data);

        const categoryId = searchParams?.get("category");
        if (categoryId && categoryId !== "all") {
          const filtered = productsData.data.filter(
            (product) => product.categoryId === parseInt(categoryId, 10)
          );
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(productsData.data);
        }
      } catch (error) {
        console.error("Ma'lumotni olishda xatolik:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);
  const handleCategoryClick = (categoryId: number | null) => {
    if (categoryId !== null) {
      router.push(`?category=${categoryId}`);
    } else {
      router.push("?category=all");
    }
  };

  if (isLoading) {
    return <div>Yuklanmoqda...</div>;
  }

  return (
    <div className="flex w-[100%] pt-10">
      <div className="w-[420px] h-[100%] flex flex-col gap-2 rounded-lg p-4 bg-white sticky top-[20%] left-0 bottom-0">
        <button
          className={`w-[100%] h-[35px] flex justify-start ${
            searchParams.get("category") === "all" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryClick(null)}
        >
          Hammasi
        </button>
        {categories.map((item) => (
          <button
            className={`w-[100%] h-[35px] flex justify-start ${
              searchParams.get("category") === String(item.id)
                ? "font-bold"
                : ""
            }`}
            key={item.id}
            onClick={() => handleCategoryClick(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-5 px-5 w-[100%]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>Mahsulotlar topilmadi</div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
