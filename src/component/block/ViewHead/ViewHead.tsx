import { FC } from 'react';
import { ViewHeadInterface } from '@interface';


const ViewHead: FC<ViewHeadInterface> = ({ headingText }): JSX.Element => {
  return (
    <div className="page-heading">
      <h1>{headingText}</h1>
    </div>
  );
}

export default ViewHead;