import React, { useContext, useEffect, useState } from "react";
import Navigation from "./Navigation";
import Card from "./Card";
import { ContextApi } from "../utils/Context";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

function Home() {
  const [productData, setProductData] = useContext(ContextApi)

  const [filterdData, setFilterdData] = useState([])

  const { search } = useLocation()

  const decodedPath = (decodeURIComponent(search).split('/')[2])

  useEffect(() => {
    if (!decodedPath) {
      setFilterdData(productData);
    } else {
      setFilterdData(productData && productData.filter(p => p.category === decodedPath));
    }
  }, [decodedPath, productData]);

  return (
    <div className="flex w-full">

      <Navigation />

      <div className="h-full w-full bg-slate-100 px-10 py-16 flex flex-wrap justify-center gap-5 overflow-y-auto overflow-x-hidden">
        {!filterdData ? <Loading /> : filterdData.map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Home;
