import Head from 'next/head';

import { CompleteChallenges } from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/pages/App.module.css"
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar></ExperienceBar>

      <CountdownProvider>
        <section>
          <div>
            <Profile></Profile>
            <CompleteChallenges></CompleteChallenges>
            <Countdown></Countdown>
          </div>
          <div>
            <ChallengeBox></ChallengeBox>
          </div>
        </section>
      </CountdownProvider>

    </div>
  )
}