export const boxcolorWidgets = `
 <div class='flex justify-between space-x-3 md:justify-around py-3'>
  <div style='backdrop-filter: blur(14px); background-color: rgba(255, 255, 255, 0.444);' id='box-blur' class='w-full shadow border p-2 rounded cursor-pointer '></div>
    <div class='bg-white w-full border shadow-xl p-2 rounded cursor-pointer ' id='box-white'></div>
    <div class='bg-gray-700  w-full shadow-2xl p-2 rounded cursor-pointer' id='box-gray'></div>
    <div class='bg-black  w-full shadow-xl p-2 rounded cursor-pointer' id='box-black'></div>
      <input
          type="color"
          id='custom-box-color'
          class="w-full rounded overflow-hidden cursor-pointer"
        />
  </div>
`;
