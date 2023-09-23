import Head from "next/head";
export default function Seo({ title }) {
  return (
    <Head>
      <title>theWorld{title}</title>
    </Head>
  );
}
