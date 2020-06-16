import React, { useState, useEffect } from "react";
import axios from "axios";
import './CardFeed.css'
import { useHistory } from "react-router-dom";
import { baseUrl } from "../../Configs/url";
import Header from "../../Header";
import CardPost from "../../CardPost";
import CardFeed from "../../CardFeed";


function FeedPage() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  const showPosts = () => {
    const token = localStorage.getItem("token");

    if (token === null) {
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
        <Header />
        <CardPost />
        <CardFeed />
        
      </div>    
  );
}

export default FeedPage;
