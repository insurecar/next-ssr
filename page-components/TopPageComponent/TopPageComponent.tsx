import React from "react";
import cn from "classnames";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { Card, HhData, Htag, P, Tag } from "@/components";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { Advantages } from "@/components";

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
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Переваги</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && <P>{page.seoText}</P>}
      <Htag tag="h2">Отримані навики</Htag>
      {page.tags.map((t) => (
        <Tag color="primary" key={t}>
          {t}
        </Tag>
      ))}
    </div>
  );
};
