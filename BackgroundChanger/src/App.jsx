import { useState } from 'react';
import ColorSlide from './components/ColorSlide';
import colorsJSON from './assets/Colors.json';

function App() {
  const [color, setColor] = useState('#000');

  const [colors, setColors] = useState(colorsJSON);

  const searchColors = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredColors = Object.keys(colorsJSON).filter(color => color.toLowerCase().includes(search));
    const filteredColorsJSON = {};
    filteredColors.forEach(color => {
      filteredColorsJSON[color] = colorsJSON[color];
    });
    setColors(filteredColorsJSON);
  }

  return (
    /*
      <div className="body w-full h-screen duration-1000" style={{ backgroundColor: color }}>
        <div className="fixed flex justify-end bottom-10 inset-x-0 px-2 scroll-m-10">
          <div className="flex w-1/2 overflow-x-scroll no-scrollbar gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl content-center">
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}>
              Red
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}>
              Green
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}>
              Blue
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}>
              Olive
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "gray" }}
              onClick={() => setColor("gray")}>
              Gray
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}>
              Yellow
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}>
              Pink
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}>
              Purple
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
              style={{ backgroundColor: "lavender" }}
              onClick={() => setColor("lavender")}>
              Lavender
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}>
              White
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}>
              Black
            </button>
          </div>
        </div>
      </div>
      */

    <div className="w-full h-screen duration-1000" style={{ backgroundColor: color }}>
      <div id="sidenav-main" class="flex flex-col w-80 m-0 fixed inset-y-0 bg-gray-900 border-r-neutral-200 duration-1000" style={{ backgroundColor: color }}>
        <div id="sidebar-header" className="my-4 px-6 sticky top-0">
          <h1 className="text-lg md:text-2xl font-bold text-white text-center animate-bounce">Background Changer</h1>
          <hr className="mb-4 mt-2 border-t-4" />
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search"
              id="default-search"
              className="block w-full p-3 ps-10 text-sm border text-gray-900 outline-none rounded-lg"
              placeholder="Search Color"
              onChange={searchColors} />
          </div>
        </div>
        <div class="relative px-6 my-2 overflow-y-scroll no-scrollbar">
          {
            Object.keys(colors).map((color, index) => (
              <ColorSlide key={index} color={color} setColor={setColor} />
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default App;