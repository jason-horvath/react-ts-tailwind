import { FC } from 'react';
import './List.css';

type ListTag = 'ol' | 'ul';

interface ListProps {
  className?: string;
  items: string[];
  type?: 'ordered' | 'unordered';
};

const List: FC<ListProps> = ({ className = 'list', items, type = 'unordered' }): JSX.Element => {
  const ListNode: ListTag = (type === 'unordered') ? 'ul' : 'ol' ;

  return (
    <ListNode className={className}>
      {items.map((item) => {
        return <li>{item}</li>
      })}
    </ListNode> 
  );
}

export default List;