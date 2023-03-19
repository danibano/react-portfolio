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
                        <p> I'm a web developer with a passion for creating stunning and functional websites. I recently graduated from the University of Minnesota full stack coding bootcamp, where I gained a strong foundation in web development technologies and best practices.
                        <br></br>
                        During my bootcamp, I learned how to develop full-stack web applications using technologies such as JavaScript, React, Node.js, Express, and MongoDB. I'm also experienced in using version control tools such as Git and GitHub to collaborate with other developers.
                        <br></br>
                        While I may be relatively new to the field, I'm excited to apply my skills to real-world projects and continue learning and growing as a developer. I take a collaborative approach to web development and enjoy working closely with clients to bring their vision to life.
                        <br></br>
                        In addition to web development, I'm also interested in design and UX, and strive to create websites that not only look great but also provide an intuitive and user-friendly experience. I believe that a website should be a reflection of a business or individual's unique brand and personality, and I work hard to ensure that each site I create is tailored to its specific audience and purpose.
                        <br></br>
                        When I'm not coding, I enjoy dancing, filming, and spending time with my friends and family. I'm always up for a new challenge and love taking on projects that push me out of my comfort zone.
                        <br></br>
                        If you're looking for a passionate and skilled web developer who is dedicated to creating exceptional websites, look no further than me. Let's work together to bring your website ideas to life!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About