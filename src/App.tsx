import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouteSwitch } from '@route';
import DefaultLayout from '@layout/DefaultLayout/DefaultLayout';
import './App.css';

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <div className="App">
          <RouteSwitch />
        </div>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;