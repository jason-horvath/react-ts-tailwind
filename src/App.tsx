import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouteSwitch } from '@route';

import './App.css';

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteSwitch />
      </BrowserRouter>
    </div>
  );
}

export default App;