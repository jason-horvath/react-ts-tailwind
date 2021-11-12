import { FC } from 'react';
import { Footer, Header, PageHead } from '@block';

interface DefaultLayoutProps {
  pageHeading: any;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({pageHeading, children }): JSX.Element => {
  return (
    <>
      <Header text="React/Redux, Typescript, and Tailwind" />
        <PageHead headingText={pageHeading.headingText}/>
        {children}
      <Footer text="Jason Horvath on GitHub" />
    </>
  );
}

export default DefaultLayout;