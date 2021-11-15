import { FC } from 'react';
import { Footer, Header, ViewHead } from '@block';

interface DefaultLayoutProps {
  pageHeading: any;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({pageHeading, children }): JSX.Element => {
  return (
    <>
      <Header text="React/Redux, Typescript, and Tailwind" />
        <ViewHead headingText={pageHeading.headingText}/>
        {children}
      <Footer text="Jason Horvath on GitHub" />
    </>
  );
}

export default DefaultLayout;