import { Poppins } from "next/font/google";
import Layout from "../components/layout";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
          background-color: #0a192f;
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
