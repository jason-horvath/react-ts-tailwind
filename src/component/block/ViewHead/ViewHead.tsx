import { FC } from 'react';
import { ViewHeadInterface } from '@interface';
import { Heading } from '@block';
import './ViewHead.css';


const ViewHead: FC<ViewHeadInterface> = ({ headingText }): JSX.Element => {
  return (
    <div className="view-head">
      <Heading level={1}>{headingText}</Heading>
    </div>
  );
}

export default ViewHead;