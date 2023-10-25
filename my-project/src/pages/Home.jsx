// import '../../dist/output.css'
import MainBlog from "../components/MainBlog";
import FeaturedBlog from "../components/FeaturedBlog";

function Home() {
  return (
    <div className="flex flex-row bg-black">
      <div className="w-3/5">
        <MainBlog/>
      </div>
      <div className="w-2/5">
        <h1 className="text-center">Featured Posts</h1>
        <FeaturedBlog category={"WTA"} title="Blog Post Title" author="Author" date="Date Posted" image="https://cdn.britannica.com/29/234629-138-ADD4F54E/who-is-Serena-Williams.jpg?w=800&h=450&c=crop" />
        <FeaturedBlog category={"WTA"} title="Blog Post Title" author="Author" date="Date Posted" image="https://cdn.britannica.com/29/234629-138-ADD4F54E/who-is-Serena-Williams.jpg?w=800&h=450&c=crop"/>
        <FeaturedBlog category={"WTA"} title="Blog Post Title" author="Author" date="Date Posted" image="https://cdn.britannica.com/29/234629-138-ADD4F54E/who-is-Serena-Williams.jpg?w=800&h=450&c=crop"/>
      </div>
    </div>
  );
}

export default Home;