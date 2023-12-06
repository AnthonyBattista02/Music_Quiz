import { Route, Routes} from 'react-router-dom'
import Login from './Login'
import MyAccount from './MyAccount'
import Play from './Play'
import Question from './Question'

export default function Main() {
    return (
        <div className="routes-container">
          <Routes>

            <Route path='/Login' element={<Login/>} />
            <Route path='/MyAccount' element={<MyAccount />} />
            <Route path='/Play' element={<Play />} />
            <Route path='/Question' element={<Question />} />

          </Routes>
        </div>
      )
}