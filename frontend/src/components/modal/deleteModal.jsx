import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function DeleteModal(recipe) {
  const { id, name, ingredients, description } = recipe.recipe;
  let [isOpen, setIsOpen] = useState(false);
  // let [id, setId] = useState(_id);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  // deletion
  function deleteRecipe() {
    axios
      .delete(`http://localhost:8080/api/recipe/delete/${id}`)
      .then((result) => {
        console.log("Recipe deleted successfully");
        console.log(result.data.data);
        closeModal();
        // reload the window
        window.location.reload();
      })
      .catch((err) => {
        console.error("Error deleting recipe:", err);
      });
  }

  return (
    <>
      <div className="flex">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-red-700/20 px-4 py-2 text-sm font-medium text-black hover:bg-red-700/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <DeleteIcon />
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
                    className="text-xl font-medium pb-5 text-center leading-6 text-gray-900"
                  >
                    Delete
                  </Dialog.Title>
                  <p className="text-center">
                    Are you sure want to delete the recipe?
                  </p>
                  <div className="mt-4 flex flex-col">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => deleteRecipe()}
                    >
                      Delete
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
