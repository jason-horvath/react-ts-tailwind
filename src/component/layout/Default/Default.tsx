import { FC } from 'react';

interface DefaultProps {};

const Default: FC<DefaultProps> = (props): JSX.Element => {
  return (
    <div className="newClassName"></div>
  );
}

export default Default;