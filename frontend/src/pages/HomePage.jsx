import React from "react";
import Hero from "../components/heroSection/hero";
import AddRecipe from "../components/recipe/addRecipe";
import FeaturedRecipeSection from "../components/recipe/FeaturedrecipeSection";

export default function Homepage() {
  return (
    <div className="pt-20">
      <Hero />
      <AddRecipe />
      <FeaturedRecipeSection />
    </div>
  );
}
