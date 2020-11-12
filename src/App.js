import './assets/main.css'


function App() {
  return (
    <div class="flex justify-center bg-gray-200">
      <input class="w-64 h-10 p-2 border rounded focus:outline-none" type="text"></input>
      <div class="block w-1/2 p-5 bg-gray-100">
        <div class="inline-block p-3 rounded bg-white shadow">
          <span class="block font-bold">Header</span>
            This is a sentence
        </div>
      </div>
    </div>
  );
}

export default App;
