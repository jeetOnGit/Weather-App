
import '../compsCss/mainTemp.css'
import '../output.css'
function overallToday(props) {
  return (
    <>
      
        <div className="tempList flex justify-between">
          <ul className="list">
            <li>
              <p>Feels Like</p>
              <h6 id="feelsLike">{props?.data?.main?.feels_like}&#8451;</h6>
            </li>
            <li>
              <p>Max Temp</p>
              <h6 id="maxTemp">{props?.data?.main?.temp_max}&#8451;</h6>
            </li>
            <li>
              <p>Humidity</p>
              <h6 id='humidity'>{props?.data?.main?.humidity}%</h6>
            </li>
          </ul>

          <ul className="list">
            <li>
              <p>weather Desc</p>
              <h6 id='skyType'>{props?.data?.weather[0]?.description}</h6>
            </li>
            <li>
              <p>Wind Speed</p>
              <h6 id='windSpeed'>{props?.data?.wind?.speed} km {props?.data?.wind?.deg}deg</h6>
            </li>
            <li>
              <p>Pressure</p>
              <h6 id='pressure'>{props?.data?.main?.pressure}mbar</h6>
            </li>
          </ul>


        </div>

    </>
  );
}

export default overallToday;