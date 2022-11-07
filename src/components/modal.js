export const cropImageModal = `
 
        <div class="p-4 flex justify-center center-modal max-w-3xl items-center h-full">
          <!-- Modal content -->
          <div class=" bg-slate-50 rounded-lg strong-shadow text-black h-fit max-h-full overflow-scroll">
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
            <div class='bg-orange-400' class='h-full' id='modal-body'>
          
            <img id='modal-image' class='h-full overflow-hidden'/>
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
      `;
