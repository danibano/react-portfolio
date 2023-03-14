import me from '../images/dance.png'
import 'animate.css';
import './about.css'

function About() {
    return (
        <div>
            <div className='about-box'>
                <div id='about'>
                    <div className='wrapper'>
                        <img className='about-img animate__animated animate__fadeInUp animate__slower' src={me}></img>
                    </div>
                    <div className='about-text animate__animated animate__fadeInDownBig animate__slower animate__delay-1s'>
                        <h2> About Me</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque velit aperiam modi distinctio perferendis necessitatibus! Quia aliquid nobis libero aliquam asperiores nisi! Iste illo, excepturi nesciunt minima ipsa ducimus?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About