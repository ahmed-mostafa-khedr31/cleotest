import Head from "next/head";
import Layout from "@/components/Layout";
import { Beach } from "@/components/Beach";

export default function Home() {
  return (
    <Layout>
      <Beach />
    </Layout>
  );
}
