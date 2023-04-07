import React from "react";
import { GetStaticProps } from "next";
import { Htag, Button, P, Tag, Rating, Input } from "../components";
import { withLayout } from "@/layout/Layout";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
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
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
      <Input placeholder="tete" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
