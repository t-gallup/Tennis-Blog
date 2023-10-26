

function Article({category, title, author, date, image}) {
  return (
    <div>
      <h1 className="text-center">{title}</h1>
      <h3 className="text-center">{category} | {author} | date</h3>
    </div>
  )
}

export default Article;
