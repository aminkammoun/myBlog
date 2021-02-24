import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";

export default function Blog() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Amine's Blog" />
      <Container maxWidth="lg">
        <main>
          <Routes />
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
