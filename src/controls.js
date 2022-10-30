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

export const controlWidgets = () => {
  return `
  <div class='flex flex-col text-black' id="labelControls">
  <div> 
  ${backgroundColorWidgets}
  <label>
      Inset:
      <input
        type="range"
        id="inset"
        class="w-full bg-gray-800 range shadow-inner rounded-3xl cursor-pointer"
      />
    </label>
    
      <label
        >Outset:
        <input
          type="range"
          id="margin"
          
          class="w-full bg-slate-800 range shadow-inner rounded-3xl cursor-pointer"
        />
      </label>
      </div>
      ${boxcolorWidgets}
      ${createWidgets}
      ${imageSizeWidgets}
    </div>
  `;
};
