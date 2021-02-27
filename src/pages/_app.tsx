import { ChallengesProvider } from "../contexts/ChallengesContext";
import "./../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider value={"teste"}>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
