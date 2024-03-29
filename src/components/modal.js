let modalhead = `
<div class="flex justify-between items-start p-4  border-b">
    <h3 class="text-xl font-semibold text-gray-900">Crop Image</h3>
    <button
      type="button"
      class="close-modal text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
      
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
`;

let modaling = `
<div class="h-full flex items-center justify-center">
    <img id="modal-image" class="object-contain max-h-full max-w-full" style="width: 100%; height: 100%;" src="../../assets/exc.png" />
</div>
`;

let closemodalbtn = `
<div class="flex items-center p-3 space-x-2 mb-2 z-30">
    <button
      data-modal-toggle="defaultModal"
      type="button"
      class="text-white bg-gray-800 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      id="crop-ok"
    >
      Ok
    </button>
    <button
      data-modal-toggle="defaultModal"
      type="button"
      class="bg-red-600 hover:bg-gray-100 rounded-lg border-gray-200 text-sm font-medium px-5 py-2.5 close-modal"
    >
      Cancel
    </button>
  </div>
`;

export const cropImageModal = `
<!-- Modal content -->
<div class='h-full'>
    <div class="max-w-3xl flex justify-between flex-col text-black h-full">
        <!-- Modal header -->
        ${modalhead}
        <!-- Modal body -->
        <div class="w-full h-full">
            ${modaling}
        </div>
        <!-- Modal footer -->
        ${closemodalbtn}
    </div>
</div>
`;
