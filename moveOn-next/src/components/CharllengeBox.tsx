import { useContext} from 'react'; 
import { CharllengesContext } from '../contexts/CharllengesContexts';
import { CountdownContext } from '../contexts/CountdownContext';


import styles from '../styles/components/CharllengeBox.module.css';

export function CharllengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge} = useContext(CharllengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();

    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }


    return (
        <div className = {styles.charllengeBoxContainer}>
            {activeChallenge ? (
                <div className= {styles.charllengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                         type="button"
                        className={styles.charllengeFailedButton}
                        onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                         type="button"
                         className={styles.charllengeSucceededButton}
                         onClick={handleChallengeSucceeded}
                         >
                            Completo
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.charllengeNotActive}>
                <strong> Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completando os desafios.
                </p>
                </div>
            )}
        </div>
    );
}