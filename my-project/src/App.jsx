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
    element: <ArticleListings title="ATP Articles" />,
  },
  {
    path: "/wta",
    element: <ArticleListings title="WTA Articles" />,
  },
  {
    path: "/college",
    element: <ArticleListings title="College Articles" />,
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
