import { useContext } from 'react';
import { CharllengesContext } from '../contexts/CharllengesContexts';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar () {
    const { currentExperience, experienceToNextLevel } = useContext(CharllengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return(
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}/>

                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} px
                </span>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header>
    );
}