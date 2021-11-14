import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1636813928190-f9ed86d7f1c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1737&q=80"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Web</span>
          <span className="postCat">ML / DL</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        aspernatur eaque qui inventore. Praesentium repellat obcaecati animi
        minus architecto illum qui reiciendis dignissimos tenetur? Iusto nam
        commodi nemo dolor doloremque? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Molestias aspernatur eaque qui inventore. Praesentium
        repellat obcaecati animi minus architecto illum qui reiciendis
        dignissimos tenetur? Iusto nam commodi nemo dolor doloremque? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Molestias aspernatur
        eaque qui inventore. Praesentium repellat obcaecati animi minus
        architecto illum qui reiciendis dignissimos tenetur? Iusto nam commodi
        nemo dolor doloremque? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Molestias aspernatur eaque qui inventore. Praesentium
        repellat obcaecati animi minus architecto illum qui reiciendis
        dignissimos tenetur? Iusto nam commodi nemo dolor doloremque?
      </p>
    </div>
  );
}

export default Post;
