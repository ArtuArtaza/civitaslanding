import styles from '@/styles/NavigationBar.module.scss'
import { useState } from 'react'
const NavigationBar = () => {

    const [isVisible, setIsVisible] = useState(false)
    return (
        <nav className={styles.navigationbar}>
            <div className={`${isVisible ? styles.open : ''} ${styles.burger}`}
                onClick={() => setIsVisible(!isVisible)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <ul className={`${isVisible ? styles.show : styles.hidden} ${styles.menuContainer}`}>
                    <ul className={styles.linkList}>
                        <li className={styles.linksContainer}>
                            <a href="#" className={styles.links}>
                                Home
                            </a>
                        </li>
                        <li className={styles.linksContainer}>
                            <a href="#" className={styles.links}>
                                The Game
                            </a>

                        </li>
                        <li className={styles.linksContainer}>
                            <a href="#" className={styles.links}>
                                Tokenomics
                            </a>
                        </li>
                        <li className={styles.linksContainer}>
                            <a href="#" className={styles.links}>
                                Docs
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.playbuttonList}>
                        <li>
                            <a href="#" className={styles.playbutton}>
                                Play
                            </a>
                        </li>
                    </ul>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar