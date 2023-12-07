import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './Question.css'

export default function Question () {

    const [progressValue, setProgressValue] = useState(100)
    const [alertDiv, setAlertDiv] = useState(null)
    const [isDivVisible, setDivVisibility] = useState(true)
    const [currentLyrics, setCurrentLyrics] = useState('Living in a fisheye lens')
    const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgressValue(prevValue => prevValue - 1)
      // If the progress value reaches 0, clear the interval to stop decreasing
      if (progressValue === 0) {
        clearInterval(intervalId)
        const content = (<div className='addedDiv'>
        <Alert className='time-alert' variant="danger"> You Ran Out of Time!!! <br/> Your Score: 0 </Alert>
        <Button variant="outline-danger"><Link to="/Play"> <h2 className='lose-button'> Exit </h2> </Link></Button>
        </div>)
        setAlertDiv(content)
        const shouldHideDiv = true
        setDivVisibility(!shouldHideDiv)
        
      }
    }, 200)

    // function to clear the interval
    return () => clearInterval(intervalId);
  }, [progressValue]);

  function addScore() {

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchInput === 'Limelight') {
      event.preventDefault()
      console.log('Question Answered Corrrectly!')
      addScore()
  }}

  const handleChange = (e) => {
    setSearchInput(e.target.value)
    e.preventDefault()
  }
    
    return(
        <div className='question-container'>
            <ProgressBar className='timer' animated now={progressValue} />
            <h4 className='question'> What Song Contains These Lyrics? </h4>
            <div className='lyrics'>"{currentLyrics}"</div>
            <div>
              {isDivVisible && (
              <form className='answer-form' autoComplete="off" onSubmit={handleSubmit}>
                  <div className="autocomplete" >
                      <input id="mySongGuess" type="text" name="Song" placeholder="Song Name" onChange={handleChange}/>
                      <input className='answer-submitted' type="submit"  value={'Submit'}/>
                  </div>
              </form>
              )}
            </div>
            {alertDiv}
        </div>
    )
}