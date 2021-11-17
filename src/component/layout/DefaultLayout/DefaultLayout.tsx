import { FC } from 'react';
import { Footer, Header, ViewHead } from '@block';
import './DefaultLayout.css';

interface DefaultLayoutProps {
  pageHeading: any;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({pageHeading, children }): JSX.Element => {
  return (
    <>
      <Header text="React/Redux, Typescript, and Tailwind" />
        <div id="layout-container">
        <ViewHead headingText={pageHeading.headingText}/>
          {children}
        </div>
      <Footer text="Jason Horvath on GitHub" />
    </>
  );
}

export default DefaultLayout;