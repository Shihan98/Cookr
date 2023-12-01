import { useState, useEffect } from "react";
import RecipeCard from "./card";
import axios from "axios";

export default function RecipeSection() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/recipe")
      .then((result) => {
        setdata(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="container mx-auto p-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data && data.map((item,index) => <RecipeCard key={index} recipe={item} />)}
      </div>
    </div>
  );
}
