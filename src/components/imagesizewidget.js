let rotateSvg = `
<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:0.3; fill:orange;} .fa-primary{fill:rgb(253 186 11);}</style></defs><path class="fa-primary" d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5z"/><path class="fa-secondary" d="M16 319.6l0-7.6c0-13.3 10.7-24 24-24h7.6c.2 0 .5 0 .7 0H168c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6c0-.2 0-.5 0-.7z"/></svg>
`;
export const imageSizeWidgets = `
<div class='flex gap-2 text-[11px] justify-between md:justify-around py-2 items-center'>
<label class='flex items-center justify-center space-x-2'>
<input type="checkbox" id="rotate">
${rotateSvg}
</label>
<button class='bg-white p-2 rounded border-dashed' id='sixbynine'>16:9</button>
<button class='bg-white p-2 rounded border-dashed' id='fourbythree'>4:3</button>
<button class='bg-white p-2 rounded border-dashed' id='threebytwo'>3:2</button>
<button class='bg-white p-2 rounded border-dashed' id='square'>square</button>
</div>
`;
