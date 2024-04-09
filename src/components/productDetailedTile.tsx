"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const getDetails = (productID: string) => {
  return fetch(`https://dummyjson.com/products/${productID}`).then((res) =>
    res.json(),
  );
};
export const DetailedCard = () => {
  const { productId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    getDetails(productId as string).then((data) => {
      console.log(data);
      setDetails(data);
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      {Object.entries(details).map((val, indx) => {
        return val[0] !== "images" ? (
          <div key={indx}>
            <span>{val[0]}</span> <span>{val[1]}</span>
            <div></div>
          </div>
        ) : null;
      })}
    </div>
  );
};
