import { useContext, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ImageContext } from "../context/context";
import styles from "../styles/Upload.module.css";

const baseURI = "https://background-r.herokuapp.com";
// const baseURI = "http://localhost:8000";

const Upload = () => {
  const { noBGpicture, originalPicture } = useContext(ImageContext);
  const [showImageOR, setShowImageOR] = useState(false);
  const [selectPara, setSelectPara] = useState(false);
  return (
    <div className={styles.container}>
      <header>
        <nav className={styles.navbar}>
          <div>
            <a href="/">Remove Background</a>
          </div>
        </nav>
      </header>
      <div className={styles.image_section}>
        <div className={styles.tabs}>
          <p
            className={selectPara ? styles.selected : null}
            onClick={() => {
              setShowImageOR(true);
              setSelectPara(true);
            }}
          >
            Original
          </p>
          <p
            className={!selectPara ? styles.selected : null}
            onClick={() => {
              setShowImageOR(false);
              setSelectPara(false);
            }}
          >
            Removed Background
          </p>
        </div>

        {!originalPicture && (
          <SkeletonTheme
            color="rgb(216, 214, 214)"
            highlightColor="rgb(233, 233, 233)"
          >
            <Skeleton width={"100%"} height={"400px"} />
          </SkeletonTheme>
        )}

        {originalPicture && (
          <div className={showImageOR ? styles.show : styles.hide}>
            <img src={`${baseURI}/${originalPicture}`} alt="orginal" />
          </div>
        )}
        {noBGpicture && (
          <div className={!showImageOR ? styles.show : styles.hide}>
            <img src={`${baseURI}/${noBGpicture}`} alt="new image" />
          </div>
        )}
      </div>
      <div className={styles.download_btn}>
        <a href={`${baseURI}/download`} download>
          Download
        </a>
      </div>
    </div>
  );
};

export default Upload;
