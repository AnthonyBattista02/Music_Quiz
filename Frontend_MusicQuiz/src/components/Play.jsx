import './Play.css'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';

export default function Play () {

    //Local Storage learned using chatGPT
    const [displayText, setDisplayText] = useState(['Rock', 'Pop', 'Country']);
    const [categorySelected, setCategorySelected] = useState()

    const changeText = () => {
        let genreArray = []
        for (let i = 0; i < 3; i++) {
            let genreNum = Math.floor(Math.random() * (5 - 1) + 1)
            switch (genreNum) {
                case 1:
                    genreArray.push('Country')
                    break;
                case 2:
                    genreArray.push('Pop')
                    break;
                case 3:
                    genreArray.push('Indie')
                    break;
                case 4:
                    genreArray.push('Rap')
                    break;
                case 5:
                    genreArray.push('Metal')
                    break;
            }}
        setDisplayText(genreArray)
        console.log(genreArray)
        
    }

    const selectCategory = (cat) => {
        setCategorySelected(cat)
        console.log(categorySelected)
    }

    useEffect(() => {
  }, [displayText]);

    
    return(
        <div className="play-container">
            <h2 className="mode">Current Mode: Lyric Master</h2>
            <h4 className="category-title">Choose A Category:</h4>
            <div className="category-container">
                <div className="category-box">
                <Button className='category-button' variant="primary" size="lg"> <Link id='cat1' to="/Question" state={{ from: 'categorySelected' }} onClick={selectCategory}> {displayText[0]} </Link> </Button>
                </div>
                <div className="category-box">
                <Button className='category-button' variant="primary" size="lg"> <Link id='cat2' to="/Question" state={{ from: 'categorySelected' }} onClick={selectCategory}> {displayText[1]} </Link> </Button>
                </div>
                <div className="category-box">
                <Button className='category-button' variant="primary" size="lg"> <Link id='cat3' to="/Question" state={{ from: 'categorySelected' }} onClick={selectCategory}> {displayText[2]} </Link> </Button>
                </div>
            </div>
            <div className='player-info-container'>
                <h2> Current Round: 1 </h2>
            </div>
        </div>
    )
}