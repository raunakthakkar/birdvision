"use client";
import React, { useState, useEffect } from "react";
import { PaginationComponent } from "./pagination";
import { ProductCard } from "./productCard";

const getData = async (skip: number, limit = 10) => {
  console.log(skip);
  return fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip * limit}`,
  ).then((res) => res.json());
};

export const ProductContainer = () => {
  const [data, setData] = useState<{ data: any[]; totalPageNumbers: number }>({
    data: [],
    totalPageNumbers: 0,
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getData(0, 10).then((data) => {
      console.log("raunak data", data);
      setData({
        data: data.products,
        totalPageNumbers: Number(data.total / 10),
      });
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading..
      </div>
    );
  }

  return (
    <div>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyItems: "center",
          minWidth: "90%",
        }}
      >
        {data?.data?.map((details, i) => (
          <ProductCard key={i} {...details} />
        )) || null}
      </section>
      <PaginationComponent
        totalPages={data.totalPageNumbers}
        onPageChange={(skip: number) =>
          getData(skip).then((data) => {
            setData({ data: data.products, totalPageNumbers: data.total });
            setLoading(false);
          })
        }
      />
    </div>
  );
};
