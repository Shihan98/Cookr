import React from "react";
import HeroImage from "../../assets/heroImg.jpg";

export default function Hero() {
  return (
    <div>
      <img
        src={HeroImage}
        alt="Hero Image"
        className="w-screen h-96 object-cover "
      />
      <div className="container mx-auto py-10">
        <h1 className="justify-self-center text-4xl">
          Welcome to Your <span className="font-bold text-cyan-600">RECIPE</span> Book!
        </h1>
        <p className="font-extralight text-xl mt-5">
          Explore and manage your favorite recipes with ease. Whether you're a
          seasoned chef or just getting started, this is your culinary
          companion.
        </p>
      </div>
    </div>
  );
}
