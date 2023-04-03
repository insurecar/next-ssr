import React from "react";
import cn from "classnames";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { Htag, Tag } from "@/components";
import styles from "./TopPageComponent.module.css";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.title}>
      <Htag tag="h1">{page.title}</Htag>

      {products && (
        <Tag color="gray" size="m">
          {products.length}
        </Tag>
      )}
      <span> Сортування</span>
    </div>
  );
};
