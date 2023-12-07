import './MyAccount.css'


export default function MyAccount () {

    
    
    return(
        <div className="account-container">
            <h2 className='hello'>Hello Username,</h2>
            <div className="highscore-container">
                <h4>Your Highscore</h4>
                <div className="highscore-box">
                    <p>Top Score by Anthony is 36</p>
                    <p>Your top score is 7</p>
                </div>
            </div>

            <div>
                <h4>Customize Songlist</h4>
                <form autoComplete="off">
                    <div className="autocomplete" >
                        <input id="mySongInput" type="text" name="Song" placeholder="Song Name"/>
                        <input id='myGenreInput' type='text' name='Genre' placeholder='Genre'/>
                    </div>
                    <input className='submitted' type="submit" value={'Add Song'}/>
                    <div className='songlist-box'>
                        <div className='song-box'>Rush Limelight ----- Rock </div>
                        <div className='song-box'>Rush The Trees ----- Rock </div>
                        <div className='song-box'>Stevie Ray Vaughn Texas Flood ----- Rock </div>
                        <div className='song-box'>Derek and the Dominos Layla ----- Rock </div>
                    </div>
                </form>
            </div>
        </div>
    )
}