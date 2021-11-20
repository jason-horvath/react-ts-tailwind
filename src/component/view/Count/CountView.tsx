import { FC } from 'react';
import Count from '@view/Count/Count/Count';

interface CountViewProps {
  title: string;
  initialCount: number;
};

const CountView: FC<CountViewProps> = (props): JSX.Element => {
  const { initialCount } = props;
  return (
    <div className="count-page">
      <Count initialCount={initialCount} />
    </div>
  );
}

export default CountView;