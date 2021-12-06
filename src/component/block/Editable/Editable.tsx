import React, { FC, ReactNode, useState} from 'react';
import { NumberLiteralType } from 'typescript';

interface EditableProps {
  value: string | number;
  type: string;
  placeholder: string;
  children: ReactNode;
};

const Editable: FC<EditableProps> = ({ value, type, placeholder, children, ...props }): JSX.Element => {
  const editableChild: ReactNode = React.Children.toArray(children).shift() ?? null ;
  if (editableChild === null) {
    throw Error('No editable child.'); 
  }
  const [editMode, setEditMode] = useState(false);
  const handlers = {
    keyDown: () => {

    },
    keyUp: () => {

    },
    onBlur: () => {

    }
  };
  return (
    <div className="editable">
      {editMode ? (
        <div onBlur={(e) => setEditMode(false)}>{editableChild}</div>
      ) : (
        {children}
      )}
    </div>
  );
}

export default Editable;