import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Profile from './components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <div style={{marginBlock:'8rem'}}><Home/></div>
      },
      {
         path: '/about',
        element: <div style={{marginBlock:'8rem'}}><About/></div>
      },
      {
         path: '/profile',
        element: <div style={{marginBlock:'8rem'}}><Profile/></div>
      }
    ]
  }]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
