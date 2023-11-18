import styles from './Loading.module.css';

export default function Loading() {
  return (
    <p>
      <span className={styles.Loading}> Loading </span>
    </p>
  );
}

Loading.defaultProps = {
  classNames: '',
};
