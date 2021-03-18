import { useContext } from "react";
import { ImageContext } from "../context/context";
import styles from "../styles/Home.module.css";

const FileUploader = () => {
  const { handleSubmition } = useContext(ImageContext);
  return (
    <div className='btn_container'>
      <input
        type='file'
        name='image'
        id='upload_btn'
        hidden
        onChange={(e) => {
          handleSubmition(e.target.files[0]);
        }}
      />
      <label htmlFor='upload_btn' className={styles.upload_btn}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-upload'
        >
          <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
          <polyline points='17 8 12 3 7 8'></polyline>
          <line x1='12' y1='3' x2='12' y2='15'></line>
        </svg>
        Upload Image
      </label>
    </div>
  );
};
export default FileUploader;
