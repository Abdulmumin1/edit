const preBackkgrounds = `
 <div class='flex justify-between space-x-3 md:justify-around py-3'>
    <div class='custom-background-1 w-full shadow-xl p-2 rounded cursor-pointer ' id='cbg-1'></div>
    <div class='custom-background-2 w-full shadow-2xl p-2 rounded cursor-pointer' id='cbg-2'></div>
    <div class='custom-background-3 w-full shadow-xl p-2 rounded cursor-pointer' id='cbg-3'></div>
     <div class='bg-black  w-full shadow-xl p-2 rounded cursor-pointer custom-background-4' id='cbg-4'
    ></div> 
        <input
          type="color"
          id='background'
          class="w-full rounded overflow-hidden cursor-pointer"
        />
      
  </div>
`;

let tabContent = `
<div id='solid-tab'>
    ${preBackkgrounds}
    </div>

    <div id='gradient-tab' class="hidden">
      
      <div class="flex space-x-6">
        <input
          type="color"
          id="gradient-one"
          class="w-full rounded-2xl overflow-hidden cursor-pointer"
        />

        <input
          type="color"
          id="gradient-two"
          class="w-full rounded-2xl overflow-hidden cursor-pointer"
        />
      </div>
      <label for='gradient-slider' >angle</label>
        <input
          type="range"
          id='gradient-slider'
          max="360"
          class="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
    </div>
`;

export const backgroundColorWidgets = `
<div class='space-y-3'>
 <div class="inline-flex bg-gray-100 space-x-2 w-full p-1" role="group">
    <button class='flex-1 hover:shadow-md p-1 hover:bg-white rounded-md' id='solid'>Solid</button>
    <button class='flex-1 hover:shadow-md p-1 hover:bg-white rounded-md' id='gradient'>Gradient</button>
  </div>
  <div>
  ${tabContent}
  </div>
  
</div>
`;
