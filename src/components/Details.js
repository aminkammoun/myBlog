import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import firebase from "../db/firebase";

import MainFeaturedPost from "./MainFeaturePost";
import FeaturedPost from "./FeaturePost";

export default function Details(props) {
  const postsRef = firebase.firestore().collection("posts");

  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    postsRef
      .doc(props.match.params.id)
      .get()
      .then((querySnapshot) => {
        const items = [];

        const data = querySnapshot.data();

        const item = {
          ...data,
          // date: new Date(data.date.seconds * 1000), //format data as it comes in from firebase
          id: querySnapshot.data().id,
        };

        items.push(item);

        setPost(items[0]);
      });
  }, []);

  return (
    <div>
      <MainFeaturedPost post={post} />
    </div>
  );
}
