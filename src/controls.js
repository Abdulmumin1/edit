import { backgroundColorWidgets } from "./components/backgroundColor";
import { boxcolorWidgets } from "./components/boxcolorwidgets";
import { createWidgets } from "./components/imageandtext";
import { imageSizeWidgets } from "./components/imagesizewidget";

const cropImageWidgets = `
<div flex flex-col text-black>
<p class='py-2'>Crop</p>
<label>
    vetical:
    <input
      type="range"
      id='crop-top'
      class=" w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
    />
  </label>
  <label>
    horizontal:
    <input
      type="range"
      id='crop-top'
      class="w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
    />
  </label>
  </div>
`;

const insetandoutsetWidget = `
<div class='flex flex-col space-x-0 lg:space-x-2 lg:flex-row'>
 <label>
      Inset:
      <input
        type="range"
        id="inset"
        class="w-full bg-orange-100 p-[.13rem] rounded-lg appearance-none cursor-pointer range shadow-inner"
      />
    </label>
    
      <label
        >Outset:
        <input
          type="range"
          id="margin"
          
          class="w-full bg-orange-100 p-[.13rem] rounded-lg appearance-none shadow-inner cursor-pointer"
        />
      </label>
      </div>
`;
export const controlWidgets = () => {
  return `
  <div class='flex flex-col text-black' id="labelControls">
  
      ${backgroundColorWidgets}
      ${insetandoutsetWidget}
      ${boxcolorWidgets}
      ${createWidgets}
      ${imageSizeWidgets}
    </div>
  `;
};
