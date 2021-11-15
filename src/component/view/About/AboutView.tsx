import { FC } from 'react';

interface AboutViewProps {
  title: string;
};

const AboutView: FC<AboutViewProps> = ({ title }): JSX.Element => {
  return (
    <div className="about-page">{title}</div>
  );
}

export default AboutView;