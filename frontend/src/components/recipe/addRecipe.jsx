import React from "react";
import AddModal from "../modal/addModal";

export default function AddRecipe() {
  return (
    <div className="bg-cyan-100">
      <div className="container mx-auto p-5 py-8">
        <div className="md:grid md:grid-cols-6 md:gap-4">
          <div className="self-center col-start-1 col-end-7 md:col-start-1 md:col-end-2">
            <AddModal />
          </div>
          <div className="col-span-6 md:col-span-5">
            <p className="font-medium">Ready to add your own twist?</p>
            <p className="font-thin">
              Click 'Add a Recipe' to share your culinary creations with the
              community!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
