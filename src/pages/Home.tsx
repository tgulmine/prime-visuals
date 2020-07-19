import React from 'react';
import Header from '../components/Header/Header';
import HomeContent from '../components/HomeContent/HomeContent';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black h-screen relative text-gray-200">
      <Header />
      <HomeContent />
    </div>
  );
};

export default HomePage;
