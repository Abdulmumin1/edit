const dropZone = `
<div class="flex justify-center items-center w-full">
    <label id='dropzone' for="add-image" class="flex flex-col justify-center items-center w-full h-32 bg-slate-100 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer  hover:bg-gray-100">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="add-image" type="file" class="hidden">
    </label>
</div> 
`;
export const labelControls = () => {
  return `
  <div class='flex flex-col text-black' id="labelControls">
  <label>
      Inset:
      <input
        type="range"
        id="inset"
        class="rounded-3x w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
      />
    </label>
    
      <label
        >Outset:
        <input
          type="range"
          id="margin"
          
          class="rounded-3x w-full bg-slate-800 range shadow-inner rounded-3xl cursor-pointer"
        />
      </label>
      <label
     
    ${dropZone}
    </div>
  `;
};
