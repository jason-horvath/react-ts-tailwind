import { FC } from 'react';
import { Footer, Header } from '@block';

interface DefaultLayoutProps {};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header text="React/Redux, Typescript, and Tailwind" />
        {children}
      <Footer text="Jason Horvath on GitHub" />
    </>
  );
}

export default DefaultLayout;