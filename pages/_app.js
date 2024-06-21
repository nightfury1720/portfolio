import { Poppins } from "next/font/google";
import Layout from "../components/layout";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          font-family: ${poppins.style.fontFamily};
          height: 100%;
          margin: 0;
          overscroll-behavior-y: none;
        }

        body {
          background: linear-gradient(
            to bottom right,
            rgba(10, 25, 47, 1),
            rgba(83, 4, 117, 1)
          );
          background-attachment: fixed;
          min-height: 100vh;
          position: relative;
        }

      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
