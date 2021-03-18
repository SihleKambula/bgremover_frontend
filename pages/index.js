import styles from "../styles/Home.module.css";
import Head from "next/head";
import FileUploader from "../components/FileUploader";
import { useContext } from "react";
import { ImageContext } from "../context/context";

const Index = () => {
  const { errorMsg } = useContext(ImageContext);
  return (
    <>
      <Head>
        <title>Removy</title>
      </Head>
      <header>
        <nav className={styles.navbar}>
          <div>
            <p>Removy</p>
          </div>
        </nav>
      </header>

      <main className={styles.container}>
        <h1 className={styles.title}>
          Upload an image to remove the background
        </h1>

        <FileUploader />
        {errorMsg && (
          <div>
            <p>{errorMsg}</p>
          </div>
        )}
      </main>
    </>
  );
};
export default Index;
