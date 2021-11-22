import { memo } from 'react';
import './styles/app.scss';
import { TodosApp } from './components';

function App() {
  return (
    <div className="App">
      <TodosApp />
    </div>
  );
}

export default memo(App);
