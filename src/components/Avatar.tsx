import styles from "./Avatar.module.css";

interface Avatar {
  src: string;
  hasBorder: boolean;
}

export function Avatar({ src, hasBorder = true }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
