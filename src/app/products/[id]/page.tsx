import axios from "axios";
import Image from "next/image";
import React from "react";

async function getDetailProduct(id: string) {
  const { data } = await axios.get(
    `https://9fd0d88e6d8305b1.mokky.dev/products/${id}`
  );
  return data;
}

interface PageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: PageProps) => {
  const data = await getDetailProduct(params.id);

  return (
    <div className="mx-auto max-w-[1380px]">
      <p>{data.name}</p>
      <div>
        <img src={data.images} className="w-[320px] h-[320px]" alt="" />
        <div>
          <h1>{data.name}</h1>
          <div>
            <div className="flex">
              <Image src={"/star-solid-24.png"} alt="" width={14} height={14} />
              <Image src={"/star-solid-24.png"} alt="" width={14} height={14} />
              <Image src={"/star-solid-24.png"} alt="" width={14} height={14} />
              <Image src={"/star-solid-24.png"} alt="" width={14} height={24} />
              <Image src={"/star-solid-24.png"} alt="" width={14} height={14} />
            </div>
            <p>{data.reviews}ta sharx</p>
            <p><img src="https://asaxiy.uz/custom-assets/images/icons/share.svg" alt="" />Ulashish</p>
          </div>
          <h2>{data.discount_price.toLocaleString()} so'm</h2>
          <div>
            <p>Brend</p>
            <p></p>
            <p>{data.Brand_id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
