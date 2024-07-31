import React from 'react';

const App = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <header className="bg-green-800 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Garden Shop</h1>
        </div>
      </header>
      <main className="container mx-auto p-4 flex-grow">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1">
            <img src="plant1.jpg" alt="Plant 1" className="w-full h-auto rounded" />
            <p className="mt-2 text-center">Plant 1 Description</p>
          </div>
          <div className="col-span-1">
            <img src="plant2.jpg" alt="Plant 2" className="w-full h-auto rounded" />
            <p className="mt-2 text-center">Plant 2 Description</p>
          </div>
          <div className="col-span-1">
            <img src="plant3.jpg" alt="Plant 3" className="w-full h-auto rounded" />
            <p className="mt-2 text-center">Plant 3 Description</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <img src="plant4.jpg" alt="Plant 4" className="w-full h-auto rounded" />
            <p className="mt-2 text-center">Plant 4 Description</p>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <img src="plant5.jpg" alt="Plant 5" className="w-full h-auto rounded" />
            <p className="mt-2 text-center">Plant 5 Description</p>
          </div>
        </section>
      </main>
      <footer className="bg-green-800 text-white p-4 mt-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Garden Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;