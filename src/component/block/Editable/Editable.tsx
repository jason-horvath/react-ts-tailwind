import React, { FC, ReactNode, useState} from 'react';
import { Input, TextArea } from '@form';
 

interface EditableProps {
  value: string | number;
  control: 'input' | 'textarea';
  placeholder: string;
  children: ReactNode;
};

const Editable: FC<EditableProps> = ({ value, control, placeholder, children, ...props }): JSX.Element => {
  const editableChild: ReactNode = React.Children.toArray(children).shift() ?? null ;
  if (editableChild === null) {
    throw Error('No editable child.'); 
  }
  
  const [editMode, setEditMode] = useState(false);
  const controls = {
    input: Input,
    textarea: TextArea 
  };

  const handlers = {
    keyDown: () => {
 
    },
    keyUp: () => {

    },
    onBlur: () => {

    }
  };
  return (
    <span className="editable">
      {editMode ? (
        <div onBlur={(e) => setEditMode(false)}>{editableChild}</div>
      ) : (
        {children}
      )}
    </span>
  );
}

export default Editable;