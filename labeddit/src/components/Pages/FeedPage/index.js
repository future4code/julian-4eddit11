import React, { useState, useEffect } from "react";

import axios from "axios";
import { baseUrl } from "../../LoginForm";
import { useHistory } from "react-router-dom";

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  const showPosts = () => {
    const token = localStorage.getItem("token");

    if (token === "") {
      history.push("/signup");
    } else {
      axios
        .get(`${baseUrl}/posts`, {
          headers: {
            Authorization: token
          }
        })
        .then(result => {
          setPosts(result.data.posts);
        })
        .catch(err => {
          console.log("erro :", err);
        });
    }
  };

  useEffect(() => {
    showPosts();
  }, []);

  return (
    <div>
      <div>
        <form>
          <fieldset>
            <input type="textarea" />
            <input type="textarea" />
          </fieldset>
        </form>
        <button>POSTAR</button>
      </div>
      <div>
        {posts.map(p => {
          return (
            <div className="PostsExibithion" key={p.id}>
              <div>
                {" "}
                <h3>{p.title} </h3>
              </div>
              <div>
                <p>{p.username}</p>
              </div>
              <div>
                <p>{p.text}</p>
              </div>
              <div>
                <p>
                  <span>Positivo </span>
                  {p.votesCount}
                  <span> Negativo</span>{" "}
                </p>
                <p>{p.commentsCount} Comentários</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeedPage;
