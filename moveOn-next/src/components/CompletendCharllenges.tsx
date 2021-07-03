import { useContext } from 'react';
import { CharllengesContext } from '../contexts/CharllengesContexts';
import styles from '../styles/components/CompletendCharllenges.module.css';

export function CompletendCharllenges() {
    const { challengesCompleted } = useContext(CharllengesContext);


    return(
        <div className={styles.completendChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}