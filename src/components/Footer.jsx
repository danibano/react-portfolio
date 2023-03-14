import instagram from './images/instagram.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import '../App.css'

function Footer() {
    return (
        <footer>
            <div className='footer-flex'>
                <a href='https://github.com/danibano'><img src={github} alt='github' className='icons' /></a>
                <a href='https://www.linkedin.com/in/danielle-banovetz-612a33237/'><img src={linkedin} alt='linkedin' className='icons'/></a>
                <a href='https://www.instagram.com/danibano/'><img src={instagram} alt='instagram' className='icons'/></a>
            </div>
         </footer>   
    )
}

export default Footer