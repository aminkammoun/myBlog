import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Moment from "react-moment";
import Grid from "@material-ui/core/Grid";
import firebase from "../db/firebase";
import { Typography } from "@material-ui/core";
import MainFeaturedPost from "./MainFeaturePost";
import DetailContent from "./DetailContent";

const style = makeStyles({
  Divider: {
    marginTop: "8px",
    marginBottom: "8px",
    width: "100%",
    height: "1px",
    backgroundColor: "#7e7e7e",
  },
});

export default function Details(props) {
  const postsRef = firebase.firestore().collection("posts");
  const [posts, setPosts] = React.useState([]);
  const [post, setPost] = React.useState([]);

  const currentPost = () => {
    postsRef
      .doc(props.match.params.id)
      .get()
      .then((querySnapshot) => {
        const items = [];

        const data = querySnapshot.data();

        const item = {
          ...data,
          date: new Date(data.date.seconds * 1000), //format data as it comes in from firebase
          id: querySnapshot.data().id,
        };

        items.push(item);
        setPosts(items);

        setPost(items[0]);
      });
  };
  const getPosts = () => {
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
      console.log(posts);
    });
  };

  React.useEffect(() => {
    currentPost();
    getPosts();
  }, []);

  return (
    <div>
      <MainFeaturedPost post={post} />

      <Grid container spacing={0}>
        <Grid item md={9} xs={12}>
          <DetailContent content={post} />
        </Grid>
        <Grid item md={3} xs={12}></Grid>
      </Grid>
    </div>
  );
}
