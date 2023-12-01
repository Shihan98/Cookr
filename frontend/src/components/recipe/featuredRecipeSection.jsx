import React from "react";
import FeaturedRecipeCard from "./featuredCard";

import { recipeData } from "../../data/data";

export default function FeaturedRecipeSection() {
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto p-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {recipeData.map((item) => (
          <FeaturedRecipeCard key={item.id} recipe={item} />
        ))}
      </div>
    </div>
  );
}
