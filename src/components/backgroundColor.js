let svgAdd = `
<svg style='width:16px;' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

`;

let svgBack = `
<svg style='width:16px;' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>

`;
const preBackkgrounds = `
 <div class='flex justify-between space-x-3 md:justify-around py-3'>
    <div class='custom-background-1 w-full shadow-xl p-2 rounded cursor-pointer ' id='cbg-1'></div>
    <div class='custom-background-2 w-full shadow-2xl p-2 rounded cursor-pointer' id='cbg-2'></div>
    <div class='custom-background-3 w-full shadow-xl p-2 rounded cursor-pointer' id='cbg-3'></div>
     <div class='bg-black  w-full shadow-xl p-2 rounded cursor-pointer custom-background-4' id='cbg-4'
    ></div> 
    <div id='gradient' class='bg-white  w-full p-2 rounded cursor-pointer'
    >${svgAdd}</div> 
        <input
          type="color"
          id='background'
          class="w-full rounded overflow-hidden cursor-pointer hidden"
        />
      
  </div>
`;

let tabContent = `
<div id='solid-tab'>
    ${preBackkgrounds}
  </div>

    <div id='gradient-tab' class="hidden">
    <div class='flex w-full space-x-1 my-2'>
      <div id='solid' class='flex align-top bg-white shadow p-2 rounded'
      >${svgBack}</div>


      <div class="flex w-full space-x-3 justify-start align-baseline" id='gradient-colors'>
      
        <input
          type="color"
          id="gradient-one"
          class="w-full h-full rounded-2xl overflow-hidden cursor-pointer"
        />

        <input
          type="color"
          id="gradient-two"
          class="w-full h-full rounded-2xl overflow-hidden cursor-pointer"
        />
        <div id='add-color' class='bg-white  w-full p-2 rounded cursor-pointer'
          >${svgAdd}</div> 
      </div>

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

  <p class='bg-orange-100 p-2 rounded-3xl hidden lg:block'>Backgrounds</p>
  <div>
  ${tabContent}
  </div>
  
`;
