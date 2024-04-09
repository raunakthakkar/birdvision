"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ProductCard = ({ ...productDetails }) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/product/${productDetails.id}`)}>
      <Image
        src={productDetails.images[0]}
        width={200}
        height={200}
        alt={productDetails.title}
      />
      <span>{productDetails.title} </span>
      <span>{`$ ${productDetails.price}`} </span>
    </div>
  );
};
