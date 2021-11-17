import { FC, MouseEventHandler, ReactNode } from 'react';
import { Heading } from '@block';
import type { HeadingLevel } from '@type';
import './Card.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  level?: HeadingLevel;
  onClick?: MouseEventHandler;
  title: string;
};

const Card: FC<CardProps> = ({ title, children, className='card', level=3, ...otherProps}): JSX.Element => {
  return (
    <div className={className} {...otherProps}>
      <Heading level={level} className="card__title">{title}</Heading>
      {children}
    </div>
  );
}

export default Card;