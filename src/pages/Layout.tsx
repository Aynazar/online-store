import type { FC } from "react";
import { ReactNode } from "react";
import Header from "../components/common/Header.tsx";
import Footer from "@/components/common/Footer.tsx";

interface OwnProps {
  children?: ReactNode;
}

const Layout: FC<OwnProps> = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Header />

        <main className="main">
          <div className="container">{children}</div>
        </main>

        <Footer />
      </div>
      <div id="navbar-mobile"></div>
    </>
  );
};

export default Layout;
