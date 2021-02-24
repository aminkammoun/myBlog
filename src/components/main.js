import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import firebase from "../db/firebase";

import MainFeaturedPost from "./MainFeaturePost";
import FeaturedPost from "./FeaturePost";

export default function Main() {
  const postsRef = firebase.firestore().collection("posts");
  const [posts, setPosts] = React.useState([]);
  const [post, setPost] = React.useState([]);
  React.useEffect(() => {
    postsRef.get().then((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const item = {
          ...data,
          date: new Date(data.date.seconds * 1000), //format data as it comes in from firebase
          id: doc.id,
        };
        items.push(item);
      });
      setPosts(items);
      setPost(items.slice(-1)[0]);
    });
  }, []);
  
  return (
    <div>
      <MainFeaturedPost post={post} />
      <Grid container spacing={4}>
        {posts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </div>
  );
}
