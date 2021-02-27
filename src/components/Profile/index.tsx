import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/gnunesinf.png" alt="Guilherme Nunes" />
      <div>
        <strong>Guilherme Nunes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
