import { FC } from 'react';
import { Heading } from '@block';

interface HomePageProps {
  title: string;
};

const HomePage: FC<HomePageProps> = (props): JSX.Element => {
  return (
    <div className="home-page">
      <Heading level={3}>Welcome to the React/Typescript and Tailwind project.</Heading>
      <p>Hello world! Yea, that's right, I said it! This is basically a boiler plate code project based mainly on what the title says.</p>
      <p>The intention here is to add some opinion to a very unopinionanted library, React. Typescript, along with some example folder structure helps that along.</p>
    </div>
  );
}

export default HomePage;