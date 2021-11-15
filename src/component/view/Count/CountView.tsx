import { FC } from 'react';
import Count from '@view/Count/Count/Count';

interface CountViewProps {
  title: string;
  initialCount: number;
};

const CountView: FC<CountViewProps> = (props): JSX.Element => {
  const { title, initialCount } = props;
  return (
    <div className="count-page">
      <h1>{title}</h1>
      <Count initialCount={initialCount} />
    </div>
  );
}

export default CountView;