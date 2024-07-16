import Head from "next/head";
import Layout from "@/components/Layout";
import { Beach } from "@/components/Beach";
export async function getServerSideProps(context) {
  try {
    // Fetch data from an API or other source
    const data = "Server-side data fetched dynamically";

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        data: null, // Ensure data is defined, even if it's null
      },
    };
  }
}
function Home() {
  return (
    <Layout>
      <Beach />
    </Layout>
  );
}

export default Home;
