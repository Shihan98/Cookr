import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useState } from "react";

export default function AddModal() {
  let [isOpen, setIsOpen] = useState(false);
  let [name, setName] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [description, setDescription] = useState("");
  let [data, setdata] = useState();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function createRecipe() {
    axios
      .post("http://localhost:8080/api/v1/recipe", {
        name: name,
        ingredients: ingredients,
        description: description,
      })
      .then((result) => {
        setdata(result);
        console.log(data);
        // Close the modal
        closeModal();

        // Reload the window after closing the modal
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="flex">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Add Recipe
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden items-center justify-center rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl pb-5 text-center font-medium leading-6 text-gray-900"
                  >
                    Add New Recipe
                  </Dialog.Title>
                  <div className="mt-2 items-center">
                    <p className="pb-1">Name</p>
                    <input
                      type="text"
                      name="Name"
                      className="border border-slate-500 w-full"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="mt-2 items-center">
                    <p className="pb-1">Ingredients</p>
                    <textarea
                      type="text"
                      name="Name"
                      className="border border-slate-500 w-full h-20"
                      onChange={(e) => setIngredients(e.target.value)}
                      value={ingredients}
                    />
                  </div>

                  <div className="mt-2 items-center">
                    <p className="pb-1">Description</p>
                    <textarea
                      type="text"
                      name="Name"
                      className="border border-slate-500 w-full h-20"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </div>

                  <div className="flex flex-col mt-4 space-y-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => createRecipe()}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
