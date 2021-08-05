import Link from "next/link";
import Content from "../components/content";
import Header from "../components/header";

export default function About() {
  return (
    <>
      <Header />
      <Content>
        <h1>About</h1>
        <Link href={`/`}>
          <a>トップへ</a>
        </Link>
      </Content>
    </>
  );
}
