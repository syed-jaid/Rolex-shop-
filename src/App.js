import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from './Allpages/HomePart/Main';
import Home from './Allpages/Home';
import LogIn from './Allpages/Auth/LogIn';
import SignUp from './Allpages/Auth/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    }
  ]);
  return (
    <div className="App mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
