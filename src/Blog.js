import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import firebase from "./db/firebase";
import Header from "./components/Header";
import MainFeaturedPost from "./components/MainFeaturePost";
import FeaturedPost from "./components/FeaturePost";
import Footer from "./components/Footer";

const mainFeaturedPost = {
  title: "Day 4",
  description: "this is what we should reach",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Day 1",
    date: "22/02/2021",
    description: "This is the first day ",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Day 2",
    date: "23/02/2021",
    description: "This is the first day ",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];
export default function Blog() {
  const postsRef = firebase.firestore().collection("posts");
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    postsRef.get().then((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const item = {
          ...data,
         // date: new Date(data.date.seconds * 1000), //format data as it comes in from firebase
          id: doc.id,
        };
        items.push(item);
      });
      setPosts(items);
      console.log(posts);
    });
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Amine's Blog" />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {posts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
