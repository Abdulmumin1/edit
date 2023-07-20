let svgCenter = `
<svg  style="width:20px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

`;
let svgLeft = `
<svg style="width:20px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>

`;
let svgRight = `
<svg style="width:20px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

`;

const dropZone = `
<div class="flex justify-center items-center w-full">
    <label id='dropzone' for="add-image" class="flex flex-col justify-center items-center w-full h-8 lg:h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer  hover:bg-gray-100">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 hidden lg:block w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 mt-4 lg:mt-0 text-center"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 hidden lg:block">SVG, PNG or JPG</p>
        </div>
        <input id="add-image" type="file" class="hidden">
    </label>
</div> 
`;

const textAlignWidgets = `
  <div class='flex justify-end space-x-4 py-3'>
    <button class='bg-white shadow p-2 rounded border-dashed' id='text-left'>${svgLeft}</button>
    <button class='bg-white shadow p-2 rounded border-dashed' id='text-center'>${svgCenter}</button>
    <button class='bg-white shadow p-2 rounded border-dashed' id='text-right'>${svgRight}</button>
  </div>
`;

let tabContent = `
 <div class='w-full hidden' id='text-tab-items'>
  <div class='flex align-bottom space-x-1'>
    <label class='w-full h-full' id='text-font'>
        font
        <input
          type="range"
          id="font-slider"
          max="60"
          class="w-full h-full bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
    </label>
    <label class='w-1/4 h-full hidden' id='text-font'>
        color
        <input
          type="color"
          id="text-color-input"
          class="h-full shadow-inner rounded cursor-pointer"
        />
    </label>
 
    </div>
    ${textAlignWidgets}
  </div>

  <div class='w-full' id='image-tab-items'>
  ${dropZone}
  <button class='bg-white shadow rounded p-1 m-1' id='crop-image-action'>Crop Image</button>
  </div>

  <div class='w-full hidden' id='code-tab-items'>
    <label for="code-language">Language:</label>
<select id="code-language" name="languages" class='p-2'>
  <option value="js">JavaScript</option>
  <option value="html">HTML</option>
  <option value="python">Python</option>
  <option value="css">CSS</option>
</select>
<button class='p-1 mt-2 rounded-md shadow' id='code-format'> Apply & Format </button>
  </div>
`;
export const createWidgets = `
<div class="flex items-center justify-center space-y-2 flex-col">
  <div class="inline-flex bg-gray-100 space-x-2 w-full p-1" role="group">
    <button class='flex-1 hover:shadow-md p-1 hover:bg-white rounded-md' id='createimage'>Image</button>
    <button class='flex-1 hover:shadow-md p-1 hover:bg-white rounded-md' id='createtext'>Text</button>
    
  </div>

 <div class='w-full'>
 ${tabContent}
 </div>
</div>
`;
let deleted_code_tab = `<button class='flex-1 hover:shadow-md p-1 hover:bg-white rounded-md' id='createcode'>Code</button>`;
