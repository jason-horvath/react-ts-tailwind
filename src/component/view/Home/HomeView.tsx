import { FC } from 'react';

interface HomePageProps {
  title: string;
};

const HomePage: FC<HomePageProps> = (props): JSX.Element => {
  const { title } = props;
  return (
    <div className="home-page">{title}</div>
  );
}

export default HomePage;