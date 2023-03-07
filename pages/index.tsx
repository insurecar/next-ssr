import React from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import { Layout } from "@/layout/Layout";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Htag tag="h3">text</Htag>
      <Button appearence="primary" arrow="right">
        qwer
      </Button>
      <P size="l">Hello world</P>
      <Tag size="s" color="red">
        sdg
      </Tag>
      <Rating rating={2} />
    </Layout>
  );
}
