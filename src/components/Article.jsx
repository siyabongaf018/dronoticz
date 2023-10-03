const Article = ({ images }) => {
  return (
    <section id="article">
      <h1>LATEST ARTICLES</h1>
      <hr className="horizontal_line" />

      <div className="article__card">
        {images.map((image, index) => (
          <div  key={index} className="card">
            <img src={image.path} alt="" />
            <div className="container">
                <hr/>
              <p>{image.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Article;
