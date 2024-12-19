import Home from "./Home/Home";
import Skills from "./Skiils/skills";
import Education from "./Education/Education";
import AboutMe from "./AboutMe/Aboutme";
import Contact from "./Contact/Contact";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Skills", 
      element: <Skills />
    },
    {
      path: "/Education",
      element: <Education />
    },
    {
      path: "/AboutMe",
      element: <AboutMe />
    },
    { 
      path: "/Contact",
      element: <Contact />
      },
  ]);

  return (
    <RouterProvider router={Router} /> 
  );
}

export default App;