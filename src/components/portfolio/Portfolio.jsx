import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import barstool from '../images/barstool.png'
import smorgasbord from '../images/smorgasbord.png'
import weather from '../images/weather.png'
import workday from '../images/workday.png'
import quiz from '../images/quiz.png'
import team from '../images/team.png'
import './portfolio.css'

function Portfolio() {
  return (  
    <div>
      <Carousel id='portfolio'>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src= {barstool}
            alt="First slide"
          />
          <div className='flex border-gradient-sm'>
              <h1><a href='http://strongjaw15.github.io/the-barstool/' target='blank' className='link'> The Barstool</a></h1>
              <p><a href='https://github.com/strongjaw15/the-barstool' target='blank' className='link'>GitHub</a></p>
              <p> The Barstool is a simple application to search, save and learn how to make your favorite cocktails utilizing the distilled alocohol spirits you have available. A client-side build that utilizes server-side API calls, local storage, and an embedded video player.</p>
          </div>  
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src= {smorgasbord}
            alt="Second slide"
          />
          <div className='flex border-gradient-sm'>
              <h1><a href='https://smorgasbord.herokuapp.com/' target='blank' className='link'> Smorgasbord</a></h1>
              <p><a href='https://github.com/Greg-Trahan/smorgasbord' target='blank' className='link'>GitHub</a></p>
              <p>Smorgasbord is a website for users to post and view favorite restaraunts. Users can view others restraunts that have been posted, as well as review the postings of others. Each user has a personal profile for easy access to their own favorite restaraunts.</p>
          </div>  
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src= {workday}
            alt="Third slide"
          />
          <div className='flex border-gradient-sm'>
              <h1><a href='https://danibano.github.io/work-day-scheduler/' target='blank' className='link'> Work-Day App</a></h1>
              <p><a href='https://github.com/danibano/work-day-scheduler' target='blank' className='link'>GitHub</a></p>
              <p>The purpose of this project was to build a work day scheduler so that users can add events into a daily planner. The planner will display the current day and time which is powered using DayJs. The hour time blocks change color depending if the current hour is past, present or future. Inside the time block you can add and saves your event to the local storage so that if you reload the page it still exists.</p>
          </div>  
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src= {team}
            alt="Third slide"
          />
          <div className='flex border-gradient-sm'>
              <h1><a href='https://danibano.github.io/team-profile/' target='blank' className='link'> Team Profile</a></h1>
              <p><a href='https://github.com/danibano/team-profile' target='blank' className='link'>GitHub</a></p>
              <p>This generates a webpage that displays a user's team basic info. It's a command line application that prompts the user to enter information about their team members using Inquierer. It will include information such as their name, id, and email, and depending on the role either their office number, GitHub username or the school they went too.</p>
          </div>  
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src= {quiz}
            alt="Fourth slide"
          />
          <div className='flex border-gradient-sm'>
              <h1><a href='https://danibano.github.io/coding-quiz/' target='blank' className='link'> Coding Quiz</a></h1>
              <p><a href='https://github.com/danibano/coding-quiz' target='blank' className='link'>GitHub</a></p>
              <p>This is a quiz made with JavaScript. When you start the quiz a timer starts counting down, but if answer a question incorrectly you'll lose time! The quiz is over when either all questions are answered or the timer reaches 0. You then get to submit your score to the leaderboard. This uses local storage, having a timer function and using an event listener.</p>
          </div>  
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src= {weather}
            alt="Fifth slide"
          />
          <div className='flex border-gradient-sm'>
              <h1><a href='https://danibano.github.io/weather-app/' target='blank' className='link'> Weather API</a></h1>
              <p><a href='https://github.com/danibano/weather-app' target='blank' className='link'>GitHub</a></p>
              <p>This is a weather dashboard, that shows a city's current weather and the future conditions over the next five days. Using the weather API we get the information on the date, city, an icon representation of the weather, the humidity, temperature, and wind speed. When you search for a city, that city is saved using local storage and you are presented with a search history.</p>
          </div>  
        </Carousel.Item>
  
      </Carousel>
    </div>

  );
}

export default Portfolio;