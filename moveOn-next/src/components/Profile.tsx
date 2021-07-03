import { useContext } from 'react';
import { CharllengesContext } from '../contexts/CharllengesContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(CharllengesContext);

    return(
        <div className = {styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/32718377?v=4" alt="Fabricio Cruz" />
            <div>
                <strong>Fabricio Cruz</strong>
                <p>
                    <img src="icons\level.svg" alt="Level" />
                    Level { level }
                </p>
            </div>
        </div>
    );
}