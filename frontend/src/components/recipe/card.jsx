import React, { useState } from "react";
import EditModal from "../modal/editModal";
import DeleteModal from "../modal/deleteModal";

export default function RecipeCard({ recipe }) {
  const { name, ingredients, description } = recipe;

  return (
    <div className="max-w-sm rounded-xl text-center overflow-hidden h-full shadow-lg bg-stone-200/50 flex flex-col cursor-pointer bg-white  md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]">
      <div className="">
        <div className="font-bold text-xl px-6 py-4">{name}</div>
        <div className="bg-slate-300 px-6 py-4 min-h-[100px] md:min-h-[110px]">
          <p>Ingredients:</p>
          <p className="text-gray-700 text-base">{ingredients}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <p>{description}</p>
      </div>
      <div className="flex-grow"></div>
      <div className="flex justify-center items-end">
        <div className="flex space-x-4 pb-3">
          <EditModal recipe={recipe} />
          <DeleteModal recipe={recipe} />
        </div>
      </div>
    </div>
  );
}
