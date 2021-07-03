import Head from 'next/head';

import { GetServerSideProps } from 'next';

import { CompletendCharllenges } from "../components/CompletendCharllenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CharllengeBox } from "../components/CharllengeBox";



import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { CharllengesProvider } from '../contexts/CharllengesContexts';

interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props: HomeProps) {
  return (
    <CharllengesProvider
      level = {props.level}
      currentExperience = {props.currentExperience}
      challengesCompleted = {props.challengesCompleted}

    >
    <div className={styles.container}>
      <Head>
        <title>Início | moveOn</title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
           <Profile />
           <CompletendCharllenges />
           <Countdown />
          </div>
          <div>
          <CharllengeBox />
          </div>
          </section>
      </CountdownProvider>
   </div>
   </CharllengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) =>{
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
