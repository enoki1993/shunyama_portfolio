import Link from "next/link";
import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Layout>
  );
}
