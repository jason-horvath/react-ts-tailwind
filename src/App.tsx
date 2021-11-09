import { FC } from 'react';
import { Count, Footer, Header } from '@block';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

const App: FC = (): JSX.Element => {
  const headerTitle: string = "React/Redux, Typescript and Tailwind"
  return (
    <Router>
      <div className="App">
        <Header text={headerTitle} />
        <Count externalCount={10}/>
        <Footer text="On GitHub" />
      </div>
    </Router>
  );
}

export default App;