import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./ChallengeBox.module.css";

export default function ChallengeBox() {
  const hasChallengeActive = true;

  const contextData = useContext(ChallengesContext);

  console.log(contextData);

  return (
    <div className={styles.challengeBoxContainer}>
      {hasChallengeActive ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400xp</header>

          <main>
            <img src="/icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber os desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
