
function GenericSite({title, content}) {
  return (
    <div className="p-5 text-center">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default GenericSite;