import styles from '@/styles/Hero.module.scss'
import { motion,useViewportScroll,useTransform } from 'framer-motion'
import { useEffect } from 'react'

const Hero = () => {
   
    const {scrollY} = useViewportScroll();
    const y2 = useTransform(scrollY, [0, 1000], [0, 1000]);
    return (
        <section className={styles.heroContainer}>
            <motion.div 
            animate={{y:["-10rem","0rem"],opacity:[0,1]}}
            transition={{duration:.5,type:'spring'}}
            style={{y:y2}}
            className={styles.titleContainer}>
                <h1>Welcome to <span>Civitas!</span></h1>
            </motion.div>
            <>
            <motion.div 
            animate={{x:['100vw','-100vw']}}
            transition={{duration:15,bounce:.5,type:'linear',repeat:Infinity}}
            className={styles.svgwrapper}>
                <img src="/vectors/clouds.svg" alt="clouds" />
            </motion.div>
            <div className={styles.svgwrapper}>
                <img src="/vectors/behindmountains.svg" alt="bmountains" />
            </div>
            <div className={styles.svgwrapper}>
                <img src="/vectors/mountains.svg" alt="mountains" />
            </div>
            <div className={styles.svgwrapper}>
                <img src="/vectors/bird1.svg" alt="mountains" />
            </div>
            <div className={`${styles.svgwrapper } ${styles.bird2}`}>
                <img src="/vectors/bird1.svg" alt="mountains" />
            </div>
            <div className={styles.svgwrapper}>
                <img src="/vectors/island.svg" alt="island" />
            </div>
            <div className={styles.svgwrapper}>
                <img src="/vectors/lake.svg" alt="lake" />
            </div>
            </>
        </section>
    )
}

export default Hero