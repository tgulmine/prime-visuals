import React from 'react';
import Header from '../components/Header/Header';
import HomeContent from '../components/HomeContent/HomeContent';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

interface HomePageProps {
  activeColor: string;
  secondaryColor: string;
}

const HomePage: React.FC<HomePageProps> = props => {
  const { activeColor } = props;
  const { secondaryColor } = props;

  return (
    <div className="flex flex-col md:flex-row bg-black h-screen relative text-gray-200">
      <Header activeColor={activeColor} secondaryColor={secondaryColor} />
      <HomeContent activeColor={activeColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default HomePage;
