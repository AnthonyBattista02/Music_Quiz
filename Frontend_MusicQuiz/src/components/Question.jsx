import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';
import './Question.css'

export default function Question () {

    const [progressValue, setProgressValue] = useState(100)
    const [alertDiv, setAlertDiv] = useState(null)
    
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgressValue(prevValue => prevValue - 1)
      // If the progress value reaches 0, clear the interval to stop decreasing
      if (progressValue === 0) {
        clearInterval(intervalId)
        const content = (<Alert className='time-alert' variant="danger"> You Ran Out of Time!!! </Alert>)
        setAlertDiv(content)
      }
    }, 30)


    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [progressValue]);

    
    return(
        <div className='question-container'>
            <ProgressBar className='timer' animated now={progressValue} />
            <h4 className='question'> What Song Contains These Lyrics? </h4>
            <div className='lyrics'>'Living in a fish eye lens'</div>
            <form autoComplete="off">
                <div className="autocomplete" >
                    <input id="mySongGuess" type="text" name="Song" placeholder="Song Name"/>
                    <input className='answer-submitted' type="submit" value={'Submit'}/>
                </div>
            </form>
            {alertDiv}
        </div>
    )
}