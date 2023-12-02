import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

export default function EditModal({ recipe }) {
  let [isOpen, setIsOpen] = useState(false);
  let [name, setName] = useState(recipe.name);
  let [ingredients, setIngredients] = useState(recipe.ingredients);
  let [description, setDescription] = useState(recipe.description);
  let [id , setId] = useState(recipe.id);
  let [data, setData] = useState();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function updateRecipe() {
    axios
      .put("http://localhost:8080/api/recipe/update", {
        id:id,
        name: name,
        ingredients: ingredients,
        description: description,
      })
      .then((result) => {
        setData(result);
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
          className="rounded-md bg-teal-700/20 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <EditIcon />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl pb-5 text-center font-medium leading-6 text-gray-900"
                  >
                    Edit
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="pb-1">Name</p>
                    <input
                      type="text"
                      name="Name"
                      className="border border-slate-500 w-full"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="mt-2">
                    <p className="pb-1">Ingredients</p>
                    <textarea
                      type="text"
                      name="Name"
                      className="border border-slate-500 w-full h-20"
                      onChange={(e) => setIngredients(e.target.value)}
                      value={ingredients}
                    />
                  </div>

                  <div className="mt-2">
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
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={()=>updateRecipe()}
                    >
                      Update
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
