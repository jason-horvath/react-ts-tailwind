import { FC } from 'react';
import { Count } from '@block';

interface CountPageProps {
  title: string;
  initialCount: number;
};

const CountPage: FC<CountPageProps> = (props): JSX.Element => {
  const { title, initialCount } = props;
  return (
    <div className="count-page">
      <h1>{title}</h1>
      <Count initialCount={initialCount} />
    </div>
  );
}

export default CountPage;