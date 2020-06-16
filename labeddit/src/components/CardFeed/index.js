import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./CardFeed.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { baseUrl } from "../Configs/url";

const CardPosts = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  

  const showPosts = () => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      history.push("/");
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
      {posts.map(p => {
        return (
          <div
            className="PostsExibithion"
            
          >
            <div className="HeaderFeed">
              <h3>{p.title} </h3>
              <p>{p.username}</p>
            </div>
            <div className="ContentFeed">
              <p>{p.text}</p>
            </div>
            <div className="FooterFeed">
              <p>
                <span>
                  <ThumbUpIcon fontSize="small" />{" "}
                </span>
                <span className="FooterVotesCount">{p.votesCount}</span>
                <span>
                  <ThumbDownIcon fontSize="small" />
                </span>{" "}
              </p>
              <p>
                <span>{p.commentsCount}</span> <span>Comentários</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardPosts;
