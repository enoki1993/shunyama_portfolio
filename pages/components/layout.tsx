import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
