

function Article({category, title, author, date, image, content}) {
  return (
    <div>
      <h1 className="text-center">{title}</h1>
      <h3 className="text-center">{category} | {author} | {date}</h3>
      <img src={image}/>
      <p>{content}</p>
    </div>
  )
}

export default Article;
