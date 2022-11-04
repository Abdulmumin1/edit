export const cropImageModal = `
 <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0  h-full"
      >
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow text-black">
            <!-- Modal header -->
            <div
              class="flex justify-between items-start p-4 rounded-t border-b "
            >
              <h3 class="text-xl font-semibold text-gray-900 ">
                Crop Image
              </h3>
              <button
                type="button"
                class="close-modal text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-toggle="defaultModal" 
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <div>
          
            <img scr="../../assets/exc.png" id='modal-image'/>
            </div>
            <!-- Modal footer -->
            <div
              class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
            >
              <button
                data-modal-toggle="defaultModal"
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                id='crop-ok'
              >
               Ok
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                class=" bg-red-600 hover:bg-gray-100 rounded-lg border-gray-200 text-sm font-medium px-5 py-2.5 close-modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>`;
