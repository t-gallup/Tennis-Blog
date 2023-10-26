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
  {
    path: "article-1",
    element: <Article title="The Thrills and Triumphs of ATP Tennis: A 2023 Season Recap" category="ATP" author="Tyler Gallup" date="Oct 25, 2023" image="../public/images/Sinner.jpg"
    content="The ATP World Tour is in full swing in 2023, and tennis enthusiasts around the world have been treated to a captivating season filled with extraordinary matches, rising stars, and unforgettable moments. In this blog post, we'll take a closer look at some of the highlights and remarkable stories from the 2023 ATP season that have left fans on the edge of their seats.
    
    The Resurgence of Federer:
    The Swiss Maestro, Roger Federer, has defied expectations with his spectacular return to the courts in 2023. After a prolonged absence due to injury, many doubted whether he could reclaim his former glory. Federer silenced his critics with a stunning comeback, showcasing his signature grace and finesse. His thrilling matches, even if they don't always end in victory, remind fans of his enduring greatness.
    
    The Battle of the Big Three:
    The rivalry between Roger Federer, Rafael Nadal, and Novak Djokovic continued to be a defining aspect of the 2023 ATP season. These legends of the sport have delivered epic clashes that showcased their unparalleled skill and competitive spirit. The enduring dominance of the Big Three is a testament to their extraordinary talent and dedication.
    
    Next-Gen Stars Shine Bright:
    The 2023 season saw a new wave of young talents making their mark on the ATP circuit. Players like Stefanos Tsitsipas, Alexander Zverev, and Jannik Sinner demonstrated their potential to disrupt the established order. Their powerful games and fearless play have brought a breath of fresh air to the tennis world, promising a vibrant future for the sport.
    
    Grand Slam Drama:
    The Grand Slam events were filled with suspense and drama. Each tournament delivered unforgettable moments, from Rafael Nadal's historic French Open triumph to Novak Djokovic's relentless pursuit of a record-breaking 21st Grand Slam title at Wimbledon. The Grand Slam landscape remains as captivating as ever.
    
    Doubles Dominance:
    While singles often take the spotlight, the world of doubles tennis deserves its share of recognition. Teams like the Bryan brothers and the dynamic pairing of Herbert and Mahut have continued to showcase their exceptional skills and entertain fans with their exciting brand of tennis.
    
    The Rising Star of the WTA:
    The ATP season wouldn't be complete without acknowledging the extraordinary achievements of the WTA's rising star, Coco Gauff. Her dazzling performances, exceptional maturity, and inspiring journey have captured the hearts of fans and established her as a player to watch in the coming years.
    
    The 2023 ATP season has once again proven why tennis is one of the most thrilling and beloved sports in the world. From the enduring brilliance of the Big Three to the emergence of the next generation of stars, and the sheer drama of the Grand Slam events, the season has offered fans an unforgettable tennis spectacle. As the season unfolds, we can only anticipate more thrilling matches, inspiring moments, and memorable rivalries. Tennis enthusiasts are undoubtedly in for a spectacular ride."/>
  }
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
