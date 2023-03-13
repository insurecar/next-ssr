import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import React, { useState } from "react";
import { withLayout } from "@/layout/Layout";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";
import { TopPageModel } from "@/interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "@/interfaces/product.interface";

const firstCategory = 0;

const Courses = ({ menu, page, products }: CoursesProps): JSX.Element => {
  console.log(menu);
  console.log("page___", page);
  return (
    <div>
      <div>{products.length}</div>
    </div>
  );
};

export default withLayout(Courses);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    paths: menu.flatMap((m) => m.pages.map((p) => "/courses/" + p.alias)),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CoursesProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  console.log("%c WHERE THIS PARAMS", "background: coral; color:red", params);
  if (!params) {
    return {
      notFound: true,
    };
  }
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );

  const { data: page } = await axios.get<TopPageModel>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias
  );

  const { data: products } = await axios.post<ProductModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
    {
      category: page.category,
      limit: 10,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  };
};

interface CoursesProps extends Record<string, unknown> {
  firstCategory: number;
  menu: MenuItem[];
  page: TopPageModel;
  products: ProductModel[];
}
