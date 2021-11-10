import { FC } from 'react';

interface HomeProps {
  title: string;
};

const Home: FC<HomeProps> = (props): JSX.Element => {
  const { title } = props;
  return (
    <div className="home">{title}</div>
  );
}

export default Home;