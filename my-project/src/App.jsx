// import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Article from "./pages/Article";
import ArticleListings from "./pages/ArticleListings";
import GenericSite from "./pages/GenericSite";
// import '../dist/output.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "/atp",
    element: <ArticleListings title="ATP Articles" catagory="ATP" image="https://cdn.britannica.com/57/183257-050-0BA11B4B/Roger-Federer-2012.jpg" />,
  },
  {
    path: "/wta",
    element: <ArticleListings title="WTA Articles" catagory="WTA" image = "https://cdn.britannica.com/29/234629-138-ADD4F54E/who-is-Serena-Williams.jpg?w=800&h=450&c=crop"/>,
  },
  {
    path: "/college",
    element: <ArticleListings title="College Articles" catagory="College" image = "data:image/png;base64,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"/>,
  },
  {
    path: "/about-us",
    element: <GenericSite title="About Us" content="We play tennis" />,
  },
  {
    path: "/contact-us",
    element: <GenericSite title="Contact Us" content="tgallup@berkeley.edu" />,
  },
]);

function App() {
  return (
    <>
      <div className="bg-black">
        <NavBar />
        <RouterProvider router={router} />
      </div>
      
    </>
  );
}

export default App;
