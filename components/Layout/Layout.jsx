import NavigationBar from '@/components/Layout/NavigationBar/NavigationBar'
import Hero from '@/components/Layout/Hero/Hero'
import GameInfo from '@/components/Layout/GameInfo/GameInfo'
const Layout = () => {
    return (
        <>
            <header>
                <NavigationBar/>
            </header>
            <div>
                <Hero/>
                <GameInfo/>
            </div>
            <footer>

            </footer>
        </>
    )
}

export default Layout