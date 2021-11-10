import { FC } from 'react';

interface AboutProps {
  title: string;
};

const About: FC<AboutProps> = ({ title, ...rest }): JSX.Element => {
  console.log(rest)
  return (
    <div className="about">{title}</div>
  );
}

export default About;