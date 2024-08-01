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
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="/images/plant1.jpg" alt="Plant 1" className="w-full h-64 object-cover rounded" />
            <p className="mt-2 text-center text-xl font-semibold">Plant 1 Description</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="/images/plant2.jpg" alt="Plant 2" className="w-full h-64 object-cover rounded" />
            <p className="mt-2 text-center text-xl font-semibold">Plant 2 Description</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="/images/plant3.jpg" alt="Plant 3" className="w-full h-64 object-cover rounded" />
            <p className="mt-2 text-center text-xl font-semibold">Plant 3 Description</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="/images/plant4.jpg" alt="Plant 4" className="w-full h-64 object-cover rounded" />
            <p className="mt-2 text-center text-xl font-semibold">Plant 4 Description</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="/images/plant5.jpg" alt="Plant 5" className="w-full h-64 object-cover rounded" />
            <p className="mt-2 text-center text-xl font-semibold">Plant 5 Description</p>
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