import React from "react";
import cn from "classnames";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { Card, HhData, Htag, Tag } from "@/components";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "@/interfaces/page.interface";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>

        {products && (
          <Tag color="green" size="m">
            {products.length}
          </Tag>
        )}
        <span> Сортування</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансії - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ua
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
    </div>
  );
};
