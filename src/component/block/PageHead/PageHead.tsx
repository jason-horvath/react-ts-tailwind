import { FC } from 'react';
import { PageHeadInterface } from '@interface';


const PageHeading: FC<PageHeadInterface> = ({ headingText }): JSX.Element => {
  return (
    <div className="page-heading">
      <h1>{headingText}</h1>
    </div>
  );
}

export default PageHeading;