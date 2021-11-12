import { FC } from 'react';

interface AboutPageProps {
  title: string;
};

const AboutPage: FC<AboutPageProps> = ({ title }): JSX.Element => {
  return (
    <div className="about-page">{title}</div>
  );
}

export default AboutPage;