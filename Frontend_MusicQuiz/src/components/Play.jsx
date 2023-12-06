import './Play.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';

export default function Play () {

    
    return(
        <div className="play-container">
            <h2 className="mode">Current Mode: Lyric Master</h2>
            <h4 className="category-title">Choose A Category:</h4>
            <div className="category-container">
                <div className="category-box">
                <Button className='category-button' variant="primary" size="lg">Country</Button>
                </div>
                <div className="category-box">
                <Button className='category-button' variant="primary" size="lg">Rock</Button>
                </div>
                <div className="category-box">
                <Button className='category-button' variant="primary" size="lg">Indie</Button>
                </div>
            </div>
            <div className='player-info-container'>
                20 Points
            </div>
        </div>
    )
}