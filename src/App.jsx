import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getLocation } from "./data/locationThunk";
import { getCurrent } from './data/currentThunk'
import { getForecast } from "./data/forecastThunk";
import { useIsMobile } from "./Context/Context";
import { useGetError } from "./containers/getError";
import { Header } from "./containers/Header";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import {UseGeoLocation} from './Context/UseGeoLocation'


function App() {
  /* Here Thunk redux default location (tel aviv) should be hapenning and setting the forecast and current to tel aviv also*/

  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const current = useSelector((state) => state.current);
  const theme = useSelector((state) => state.theme);
  const geoLocation = UseGeoLocation()
  // console.log('theme: ', theme)

  useEffect(() => {
    dispatch(getLocation("tel aviv"));
  }, []);

  useGetError()


  useEffect(() => {
    if (location.data?.Key) {
      console.log(location)
      dispatch(getCurrent(location.data.Key));
      dispatch(getForecast({ isMetric: true, cityKey: location.data.Key }));
    } 
}, [location.data]);

useEffect(() => {
  try {
    if (current.data?.EpochTime) {
      console.log('location.data.Key ?????????????:', location.data.Key)
    }
  } catch (e) {
    console.log("should be rendered once");

    console.log("e: ", e, "current data: ", current.data);
  }
}, [current.data]);


  const isMobile = useIsMobile()



  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {!isMobile && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
          {isMobile && <Header />}

          {geoLocation.loaded ? console.log(JSON.stringify(geoLocation)) : 'Location data not available'}

        </ThemeProvider>
      </BrowserRouter>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;

