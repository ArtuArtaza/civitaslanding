import styles from '@/styles/GameInfo.module.scss'
import {motion,useAnimation} from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Slider from '@/components/Slider/Slider'
const GameInfo = () => {
    const animation = useAnimation()
    const {ref,inView} = useInView({
        threshold:0.8,
        triggerOnce: false
    })
    useEffect(() => {
        console.log(inView)
        if(inView){
            animation.start({
                x:0,
                transition: {
                    type:'spring',
                    duration:'500ms',
                    bounce:0.5,
                }

            })
        }
        if(!inView){
            animation.start({
                x:'100vw',
            })
        }
    },[inView])

    return (
        <section ref={ref} className={styles.container}>
            <motion.h2
            animate={animation}
            viewport={{root:ref}}
            transition={{type:'spring',duration:'1s',bounce:0.3}}
            className={styles.title}
            >What is <span>Civitas?</span></motion.h2>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Hic amet harum facilis doloremque, eveniet, debitis eos distinctio aliquid expedita, 
                    libero corporis laboriosam nam! Architecto minima illum adipisci 
                    labore dolorum odit eos molestiae harum. Eum itaque at assumenda labore nostrum 
                    est suscipit porro. 
                    Beatae accusantium ab assumenda impedit et molestiae atque!
                </p>
                
            </div>
		<Slider/>
        </section>
    )
}


export default GameInfo
