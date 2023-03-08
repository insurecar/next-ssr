import React from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import { withLayout } from "@/layout/Layout";

function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h3">text</Htag>
      <Button appearence="primary" arrow="down">
        qwer
      </Button>
      <P size="l">Hello world</P>
      <Tag size="s" color="red">
        sdg
      </Tag>
      <Rating rating={4} />
    </>
  );
}

export default withLayout(Home);
