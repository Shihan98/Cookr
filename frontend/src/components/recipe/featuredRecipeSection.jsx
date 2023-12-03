import React, { useEffect, useState } from "react";
import FeaturedRecipeCard from "./featuredCard";
import axios from "axios";

export default function FeaturedRecipeSection() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/recipe/getlast")
      .then((result) => {
        setdata(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-slate-200">
      <div className="container mx-auto p-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data && data.map((item,index) => (
          <FeaturedRecipeCard key={index} recipe={item} />
        ))}
      </div>
    </div>
  );
}
