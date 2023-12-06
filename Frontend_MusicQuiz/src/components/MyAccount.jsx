import './MyAccount.css'


export default function MyAccount () {

    
    return(
        <div className="account-container">
            <h2 className='hello'>Hello Username,</h2>
            <div className="highscore-container">
                <h4>Your Highscore</h4>
                <div className="highscore-box"></div>
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
                        
                    </div>
                </form>
            </div>
        </div>
    )
}