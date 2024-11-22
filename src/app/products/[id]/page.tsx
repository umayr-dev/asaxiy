import axios from "axios";
import React from "react";

async function getDetailProduct(id: string) {
  const { data } = await axios.get(
    `https://9fd0d88e6d8305b1.mokky.dev/products/${id}`
  );
  return data;
}

type PageProps = {
  params: {
    id: string;
  };
};
const ProductPage = async ({ params }: PageProps ) => {
  const data = await getDetailProduct(params.id);

  return (
    <div className="mx-auto max-w-[1380px]">
      <h2 className="text-3xl font-bold mb-4">{data.name}</h2>
      <p className="text-lg text-gray-700 mb-6">{data.description}</p>
      <img
        className="w-[160px] h-[160px] rounded-lg shadow-md"
        src={data.images}
        alt={data.name}
      />
      <p className="text-xl font-semibold text-green-500 mt-4">
        Narxi: {data.discount_price} so'm
      </p>
    </div>
  );
};

export default ProductPage;
