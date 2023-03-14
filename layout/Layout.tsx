import React, { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import { Header, Sidebar, Footer } from "./index";
import styles from "./Layout.module.css";
import { AppContextProvider, IAppContext } from "@/context/app.context";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />

      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>

      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout =
  <T extends Record<string, unknown> & IAppContext>(
    Component: FunctionComponent<T>
  ) =>
  (props: T): JSX.Element =>
    (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
