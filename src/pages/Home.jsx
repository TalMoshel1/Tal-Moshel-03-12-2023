import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getLocation } from "../data/locationThunk";
import { Search } from "../containers/Search";
import { Current } from "../containers/Current";
// import { Forecast } from "../containers/Forcast";
import { useEffect } from "react";



export function Home() {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(getLocation("tel aviv"));
  }, []);

  useEffect(()=>{
    console.log('location from home: ', location)
  },[location])


  return (
    <main>
      <Search />
      <Current/>
      {/* <Forecast /> */}
    </main>
  );
}
