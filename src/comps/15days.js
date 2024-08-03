
import '../compsCss/15days.css'
import '../output.css'
function futureTemp(props) {
  const icon1 = `http://openweathermap.org/img/wn/${props.data[1]?.weather[0]?.icon}.png`
  const icon2 = `http://openweathermap.org/img/wn/${props.data[2]?.weather[0]?.icon}.png`
  const icon3 = `http://openweathermap.org/img/wn/${props.data[3]?.weather[0]?.icon}.png`
  const icon4 = `http://openweathermap.org/img/wn/${props.data[4]?.weather[0]?.icon}.png`
  const icon5 = `http://openweathermap.org/img/wn/${props.data[5]?.weather[0]?.icon}.png`
  const icon6 = `http://openweathermap.org/img/wn/${props.data[6]?.weather[0]?.icon}.png`
  const icon7 = `http://openweathermap.org/img/wn/${props.data[7]?.weather[0]?.icon}.png`
  // console.log(icon7);
  return (
    <>
        <ul className="daysWrapper flex justify-between text-center mt-8">
          <li className='day'>
            <ul className="dayDetail">
              <li><p className='dayName'>sat</p></li>
              <li>
                <img src={icon1} alt="" />
              </li>
              <li><h6 className='dayDegree'>{props?.data[1]?.main?.feels_like}&#8451;</h6></li>
              <li><p className='weatherType'>{props?.data[1]?.weather[0]?.description}</p></li>
            </ul>
          </li>
          <li className='day'>
          <ul className="dayDetail">
              <li><p className='dayName'>Sun</p></li>
              <img src={icon2} alt="" />
              <li><h6 className='dayDegree'>{props?.data[2]?.main?.feels_like}&#8451;</h6></li>
              <li><p className='weatherType'>{props?.data[2]?.weather[0]?.description}</p></li>
            </ul>
          </li>
          <li className='day'>
              <ul className="dayDetail">
                  <li><p className='dayName'>Mon</p></li>
                  <img src={icon3} alt="" />
                  <li><h6 className='dayDegree'>{props?.data[3]?.main?.feels_like}&#8451;</h6></li>
                  <li><p className='weatherType'>{props?.data[3]?.weather[0]?.description}</p></li>
                </ul>
          </li>
          <li className='day'>
              <ul className="dayDetail">
                  <li><p className='dayName'>Tue</p></li>
                  <img src={icon4} alt="" />
                  <li><h6 className='dayDegree'>{props?.data[4]?.main?.feels_like}&#8451;</h6></li>
                  <li><p className='weatherType'>{props?.data[4]?.weather[0]?.description}</p></li>
                </ul>
          </li>
          <li className='day'>
              <ul className="dayDetail">
                  <li><p className='dayName'>Wed</p></li>
                  <img src={icon5} alt="" />
                  <li><h6 className='dayDegree'>{props?.data[5]?.main?.feels_like}&#8451;</h6></li>
                  <li><p className='weatherType'>{props?.data[5]?.weather[0]?.description}</p></li>
                </ul>
          </li>
          <li className='day'>
                <ul className="dayDetail">
                    <li><p className='dayName'>Thu</p></li>
                    <img src={icon6} alt="" />
                    <li><h6 className='dayDegree'>{props?.data[6]?.main?.feels_like}&#8451;</h6></li>
                    <li><p className='weatherType'>{props?.data[6]?.weather[0]?.description}</p></li>
                  </ul>
          </li>
          <li className='day'>
                <ul className="dayDetail">
                    <li><p className='dayName'>Fri</p></li>
                    <img src={icon7} alt="" />
                    <li><h6 className='dayDegree'>{props?.data[7]?.main?.feels_like}&#8451;</h6></li>
                    <li><p className='weatherType'>{props?.data[7]?.weather[0]?.description}</p></li>
                  </ul>
          </li>
        </ul>
    </>
  );
}

export default futureTemp;