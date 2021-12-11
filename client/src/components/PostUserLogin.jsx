
import RatingStar from "./RatingStar.jsx";


export default function Post(posts) {
  

  return (
    <div className="Post">
      <div>
        <div className="desContainer">
          {posts.map((post) => (
                <div className="description">
                  <div className="infodate">
                    <h6>{post.date}</h6>
                    <h6>{post.author}</h6>
                    <RatingStar Rating={post.calification} />
                  </div>
                  <h5>{post.description}</h5>
                </div>
              ))}
        </div>
      </div>

    </div>
  );
}