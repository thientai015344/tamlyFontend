import { useContext } from "react";
import "./feed.css";
import Share from '../share/Share'
import Post from "../post/Post";
import {Users} from '../../dummyData'
import { AuthContext } from "../../context/Authcontext";
import {  useEffect } from "react";
import {  useState } from "react";
import axios from "axios";

export default function Feed(username) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const res= await axios.get("posts/all/all");
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
 
  return (
    <div className="feed">
    <div className="feedWrapper">
      <Share></Share>
        {posts.map(p=>(
          <Post key ={p._id} post={p}></Post>
        ))} 
    </div>
  </div>
  );
}
