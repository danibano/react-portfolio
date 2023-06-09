import me from '../images/me.jpg'
import './home.css'

function Home () {
    return (
        <div className='home-page' id='home'>
            <div className='home-text border-gradient'>
                <h1> Danielle Banovetz</h1>
                <h2> Web Developer</h2>
                <p>I'm a web developer passinate about designing and developing beautiful websites. Check out my portfolio to see some of my past work and get a feel for what I can do for you. Let's chat and see how I can help you build your website! </p>
            </div>
            <div className='home-img'>
                <img src={me} alt='headshot' className='me'/>
            </div>
        </div>
    )
}

export default Home