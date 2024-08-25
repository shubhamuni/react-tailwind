import ssd from "./samsung-memory-m587InP07os-unsplash.jpg"
function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={ssd} alt="ssd" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl">
          Photo by Dipak patil
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            569
          </li>
          <li>
            <strong>Downloads:</strong>
            120
          </li>
          <li>
            <strong>Likes:</strong>
            124
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
      </div>
    </div>
  );
}


export default App;
