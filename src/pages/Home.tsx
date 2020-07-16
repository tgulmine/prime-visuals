import React from 'react';
import Header from '../components/Header/Header';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

interface HomePageProps {
  activeColor: string;
  secondaryColor: string;
}

const HomePage: React.FC<HomePageProps> = props => {
  const { activeColor } = props;
  const { secondaryColor } = props;

  return (
    <div className="flex bg-black h-screen relative">
      <Header activeColor={activeColor} secondaryColor={secondaryColor} />
      <div className="flex justify-center w-auto pl-10 pb-10 text-center items-center text-white text-2xl">
        Website made with the purpose of finding new ways of visualizing and understanding prime numbers.
      </div>
    </div>
  );
};

export default HomePage;
