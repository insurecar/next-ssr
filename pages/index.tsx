import React from "react";
import { Htag, Button, P } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h3">text</Htag>
      <Button appearence="primary" arrow="right">
        qwer
      </Button>
      <P size="l">Hello world</P>
    </div>
  );
}
