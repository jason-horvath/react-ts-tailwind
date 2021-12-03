import { FC } from 'react';
import { Heading } from '@block';

interface AboutViewProps {
  title: string;
};

const AboutView: FC<AboutViewProps> = ({ title }): JSX.Element => {
  return (
    <div className="about-page">
      <Heading level={2}>What is this all for?</Heading>
      <p>In short, this is just some boilerplate to get up and running with some structure and direction in building upon that structure.</p>
      <p>Also, there are a few utility items and reusuable components for content which can also be built upon.</p>
    </div>
  );
}

export default AboutView;