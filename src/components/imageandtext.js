let svgCenter = `
<svg style='width:16px; height=14px;' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z"/></svg>
`;
let svgLeft = `
<svg  style='width:16px; height=14px;' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
`;
let svgRight = `
<svg  style='width:16px; height=14px;' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
`;

const dropZone = `
<div class="flex justify-center items-center w-full">
    <label id='dropzone' for="add-image" class="flex flex-col justify-center items-center w-full h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer  hover:bg-gray-100">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 text-center"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500">SVG, PNG or JPG</p>
        </div>
        <input id="add-image" type="file" class="hidden">
    </label>
</div> 
`;

const textAlignWidgets = `
  <div class='flex justify-between md:justify-around py-3'>
    <button class='bg-white shadow p-2 rounded border-dashed' id='text-left'>${svgLeft}</button>
    <button class='bg-white shadow p-2 rounded border-dashed' id='text-center'>${svgCenter}</button>
    <button class='bg-white shadow p-2 rounded border-dashed' id='text-right'>${svgRight}</button>
  </div>
`;

export const createWidgets = `
<div class="flex items-center justify-center space-y-2 flex-col">
  <div class="inline-flex bg-gray-100 space-x-2 w-full p-1" role="group">
    <button class='flex-1 hover:shadow-md p-1 hover:bg-white rounded-md' id='createimage'>Image</button>
    <button class='flex-1 hover:shadow-md p-1 hover:bg-white rounded-md' id='createtext'>Text</button>
  </div>

  <div class='w-full hidden' id='text-tab-items'>
  <div class='flex align-baseline space-x-1'>
    <label class='w-3/4' id='text-font'>
        font:
        <input
          type="range"
          id="font-slider"
          max="60"
          class="w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
        />
    </label>
    <label class='w-1/4' id='text-font'>
        *
        <input
          type="color"
          id="text-color-input"
          max="60"
          class="w-full overflow-hidden bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
        />
    </label>
 
    </div>
    ${textAlignWidgets}
  </div>

  <div class='w-full' id='image-tab-items'>
  ${dropZone}
  <button class='bg-white shadow rounded p-1' id='crop-image-action'>Crop Image</button>
  </div>
</div>
`;
