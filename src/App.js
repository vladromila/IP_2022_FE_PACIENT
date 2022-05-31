import { Routes, Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import Nav from "./components/Nav/Nav"
import { PrivateRoute } from "./components/Routing/PrivateRoute"
import RecordAudio from "./screens/RecordAudio/RecordAudio"
import UserProfile from "./screens/UserProfile/UserProfile"
import AuthScreen from "./screens/AuthScreen/AuthScreen"
import RequestDiagnosis from "./screens/RequestDiagnosis/RequestDiagnosis"
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/auth" element={<AuthScreen />} />
        <Route exact path='/' element={<PrivateRoute />}>
          <Route exact path='/' element={<HomeScreen />} />
        </Route>
        <Route exact path='/requestdiagnosis' element={<PrivateRoute />}>
          <Route exact path='/requestdiagnosis' element={<RequestDiagnosis />} />
        </Route>
        <Route exact path='/recordaudio/:id' element={<PrivateRoute />}>
          <Route exact path='/recordaudio/:id' element={<RecordAudio />} />
        </Route>
        <Route exact path='/profile' element={<PrivateRoute />}>
          <Route exact path='/profile' element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App