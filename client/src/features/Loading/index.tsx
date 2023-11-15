import styles from './Loading.module.css';

type Props = {
  classNames?: Array<string>;
};

export default function Loading({ classNames }: Props) {
  return (
    <p className={[classNames].join(' ')}>
      <span className={styles.Loading}> Loading </span>
    </p>
  );
}

Loading.defaultProps = {
  classNames: '',
};
