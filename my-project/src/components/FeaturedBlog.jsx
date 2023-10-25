
function FeaturedBlog({category, title, author, date, image}) {
  return (
    <div className="flex border-2">
      <div className="p-5">
        <h5 className="text-center">{category}</h5>
        <h3 className="text-center">{title} | {author} | {date} </h3>
      </div>
      
      <img className="w-3/5 p-5" src={image}/>
    </div>
  )
}

export default FeaturedBlog
