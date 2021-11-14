import React from "react";
import "./singlepost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1636813928190-f9ed86d7f1c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1737&q=80"
          className="singlePostImg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Swayam Singh</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          quidem animi fuga ea illo similique sit facilis, nemo tempora
          temporibus esse, cupiditate facere laboriosam qui molestiae veniam.
          Harum perferendis id, nesciunt eum corrupti beatae! Quod numquam
          temporibus ut harum? Sed ullam, iusto maxime laborum nesciunt fuga
          esse mollitia eaque eligendi nam similique! Repudiandae dolores
          perspiciatis maiores quidem explicabo vero voluptates laborum delectus
          doloremque. Distinctio, suscipit. Impedit ipsam quia itaque
          voluptatibus maxime enim quisquam harum similique blanditiis rerum
          voluptate doloremque ipsum et laudantium, quam ullam, laborum sunt vel
          porro totam aspernatur tempora. Consequatur ea blanditiis eius aperiam
          assumenda quasi deserunt, soluta quis, eum minima eveniet harum
          molestiae. Earum, aut labore eligendi quibusdam magni doloremque
          maiores sequi ad cupiditate nesciunt pariatur, maxime inventore illo
          veniam nulla, consequuntur temporibus dicta tenetur. Perspiciatis quam
          molestias dolore dicta ratione, minus quos quasi? Et, modi omnis ipsam
          ipsum quasi placeat veniam laborum architecto eius odio dolorum.
          voluptate doloremque ipsum et laudantium, quam ullam, laborum sunt vel
          porro totam aspernatur tempora. Consequatur ea blanditiis eius aperiam
          assumenda quasi deserunt, soluta quis, eum minima eveniet harum
          molestiae. Earum, aut labore eligendi quibusdam magni doloremque
          maiores sequi ad cupiditate nesciunt pariatur, maxime inventore illo
          veniam nulla, consequuntur temporibus dicta tenetur. Perspiciatis quam
          molestias dolore dicta ratione, minus quos quasi? Et, modi omnis ipsam
          ipsum quasi placeat veniam laborum architecto eius odio dolorum.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
