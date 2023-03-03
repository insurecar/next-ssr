import React from "react";
import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h3">text</Htag>
      <Button appearence="ghost">qwer</Button>
    </div>
  );
}
