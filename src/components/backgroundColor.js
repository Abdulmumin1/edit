export const backgroundColorWidgets = `
<div class='space-y-3'>
 <div class="inline-flex bg-gray-100 space-x-2 w-full p-1" role="group">
    <button class='flex-1 hover:shadow-md p-1 hover:bg-white rounded-md' id='solid'>Solid</button>
    <button class='flex-1 hover:shadow-md p-1 hover:bg-white rounded-md' id='gradient'>Gradient</button>
  </div>
  
  <div id='solid-tab'>
    <label>Background:
        <input
          type="color"
          id='background'
          class="w-full rounded-2xl overflow-hidden cursor-pointer"
        />
      </label>
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
          class="w-full  cursor-pointer"
        />
    </div>
</div>
`;
