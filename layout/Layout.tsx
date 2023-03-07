import React, { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import { Header, Sidebar, Footer } from "./index";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout =
  <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  (props: T): JSX.Element =>
    (
      <Layout>
        <Component {...props} />
      </Layout>
    );
