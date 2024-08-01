import React from 'react';

const App = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <header className="bg-green-800 text-white p-4 flex items-center">
        <div className="container mx-auto flex items-center">
          <img src="/logo.png" alt="Garden Shop Logo" className="h-16 mr-4" /> {/* Increased height */}
          <h1 className="text-3xl font-bold">Garden Shop</h1>
        </div>
      </header>
      <main className="container mx-auto p-4 flex-grow">
        {/* Hero Product Section */}
        <section className="hero-product bg-green-100 p-8 rounded-lg shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <img src="/hero-product.jpg" alt="Hero Product" className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Featured Plant</h2>
              <p className="text-gray-700 mb-4">This is our featured plant of the month. It's perfect for indoor settings and requires minimal maintenance.</p>
              <button className="bg-green-800 text-white px-4 py-2 rounded-lg">Shop Now</button>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="./plant1.jpg" alt="Plant 1" className="w-full h-64 object-cover rounded" />
            <p className="mt-2 text-center text-xl font-semibold">Plant 1 Description</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="./plant2.jpg" alt="Plant 2" className="w-full h-64 object-cover rounded" />
            <p className="mt-2 text-center text-xl font-semibold">Plant 2 Description</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="./plant3.jpg" alt="Plant 3" className="w-full h-64 object-cover rounded" />
            <p className="mt-2 text-center text-xl font-semibold">Plant 3 Description</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="./plant4.jpg" alt="Plant 4" className="w-full h-64 object-cover rounded" />
            <p className="mt-2 text-center text-xl font-semibold">Plant 4 Description</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="./plant5.png" alt="Plant 5" className="w-full h-64 object-cover rounded" />
            <p className="mt-2 text-center text-xl font-semibold">Plant 5 Description</p>
          </div>
        </section>
      </main>
      <footer className="bg-green-800 text-white p-4 mt-4">
        <div className="container mx-auto text-center">
          <img src="./logo.png" alt="Garden Shop Logo" className="h-16 mx-auto mb-4" /> {/* Added logo to footer */}
              <p>&copy; 2024 Garden Shop. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
}

export default App;