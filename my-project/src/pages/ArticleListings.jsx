import FeaturedBlog from "../components/FeaturedBlog";

function ArticleListings({title, catagory, image}) {
  return (
    <div className="p-5">
      <h1 className="text-center pb-5">{title}</h1>
      <div className="flex justify-center">
        <div className="">
        <FeaturedBlog category={catagory} title={title} author="Author" date="Date Posted" image={image}/>
        <FeaturedBlog category={catagory} title={title} author="Author" date="Date Posted" image={image}/>
        <FeaturedBlog category={catagory} title={title} author="Author" date="Date Posted" image={image}/>
        </div>
        <div className="bg-white w-2">

        </div>
        <div className="">
        <FeaturedBlog category={catagory} title={title} author="Author" date="Date Posted" image={image} />
        <FeaturedBlog category={catagory} title={title} author="Author" date="Date Posted" image={image}/>
        <FeaturedBlog category={catagory} title={title} author="Author" date="Date Posted" image={image}/>
        </div>
      </div>
    </div>
  )
}

export default ArticleListings;