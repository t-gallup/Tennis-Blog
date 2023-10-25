import FeaturedBlog from "../components/FeaturedBlog";

function ArticleListings({title}) {
  return (
    <div className="p-5">
      <h1 className="text-center pb-5">{title}</h1>
      <div className="flex justify-center">
        <div className="">
        <FeaturedBlog category={"WTA"} title="Blog Post Title" author="Author" date="Date Posted" image="https://cdn.britannica.com/29/234629-138-ADD4F54E/who-is-Serena-Williams.jpg?w=800&h=450&c=crop" />
        <FeaturedBlog category={"WTA"} title="Blog Post Title" author="Author" date="Date Posted" image="https://cdn.britannica.com/29/234629-138-ADD4F54E/who-is-Serena-Williams.jpg?w=800&h=450&c=crop"/>
        <FeaturedBlog category={"WTA"} title="Blog Post Title" author="Author" date="Date Posted" image="https://cdn.britannica.com/29/234629-138-ADD4F54E/who-is-Serena-Williams.jpg?w=800&h=450&c=crop"/>
        </div>
        <div className="bg-white w-2">

        </div>
        <div className="">
        <FeaturedBlog category={"WTA"} title="Blog Post Title" author="Author" date="Date Posted" image="https://cdn.britannica.com/29/234629-138-ADD4F54E/who-is-Serena-Williams.jpg?w=800&h=450&c=crop" />
        <FeaturedBlog category={"WTA"} title="Blog Post Title" author="Author" date="Date Posted" image="https://cdn.britannica.com/29/234629-138-ADD4F54E/who-is-Serena-Williams.jpg?w=800&h=450&c=crop"/>
        <FeaturedBlog category={"WTA"} title="Blog Post Title" author="Author" date="Date Posted" image="https://cdn.britannica.com/29/234629-138-ADD4F54E/who-is-Serena-Williams.jpg?w=800&h=450&c=crop"/>
        </div>
      </div>
    </div>
  )
}

export default ArticleListings;