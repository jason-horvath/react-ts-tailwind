import { FC, ReactNode } from 'react';
import type { HeadingLevel } from '@type';
import './Heading.css';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  children: ReactNode;
  className?: string;
  level: HeadingLevel;
};

const Heading: FC<HeadingProps> = ({ children, className='heading', level }): JSX.Element => {
  const Tag: HeadingTag = `h${level}`;
  return (
    <Tag className={className}>
      {children}
    </Tag> 
  );
}

export default Heading;