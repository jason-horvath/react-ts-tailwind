import { FC } from 'react';
import { Count, Footer, Header } from '@block';
import { BrowserRouter } from 'react-router-dom';
import { RouteSwitch } from '@route';

import './App.css';

const App: FC = (): JSX.Element => {
  const headerTitle: string = "React/Redux, Typescript and Tailwind"
  return (
    <BrowserRouter>
      <div className="App">
        <Header text={headerTitle} />
        <Count externalCount={10}/>
        <Footer text="On GitHub" />
      </div>
    </BrowserRouter>
  );
}

export default App;