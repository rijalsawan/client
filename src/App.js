import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [data, setData] = React.useState(null);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);
  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <Navbar/>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;