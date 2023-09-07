import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import router from './routes/routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Main />

      </RouterProvider>
    </div>
  );
}

export default App;
