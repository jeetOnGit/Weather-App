import './App.css';
import MainTemp from './comps/mainTemp';
import OverallToday from './comps/overallToday';
import FutureTemp from './comps/15days';


import { useState } from 'react';
function App() {



const [currectTab, setCurrectTab] = useState('overall');
const [futureWeather, setfutureWeather] = useState();
const [todayWeather, setTodayWeather] = useState();
const [userInp, setUserInp] = useState();




const activeTab = (activeTabNAme) => {
  setCurrectTab(activeTabNAme)
};

const handleSubmit = (e) => {
  setUserInp(e.target.value)
};


const getUpdate = () => {
  
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${userInp}&appid=${apiKey}&units=metric`
  fetch(url)
    .then(data => data.json()).then(data => {
      // getUpdate()
      console.log(data);
      setTodayWeather(data.list[0])
      setfutureWeather(data.list)
    })
    
}



  return (
    <>
      <div className='box pt-8 pb-1 dataBox'>
        <div className='searchBox text-center my-2'>
          <input className='inpBox' value={userInp} onChange={handleSubmit} id='inp' type="text" />
          <button className='btn' onClick={getUpdate} type="submit">Submit</button>
        </div>

        <ul className='navBar'>
          <li><button className={`${currectTab === 'overall' && 'active'}`} onClick={() => activeTab('overall')} >Overall</button></li>
          <li><button className={`${currectTab === '5days' && 'active'}`} onClick={() => activeTab('5days')}>5 Days</button></li>
        </ul>
        
        <div>
          {
            currectTab === 'overall' &&
            <div className="content flex justify-around py-8 align-center">
              <MainTemp data={todayWeather} />
              <OverallToday data={todayWeather}/>
            </div>
          }
          {
            currectTab === '5days' &&
            <div>
              <FutureTemp data={futureWeather}/>
            </div>
          }


        </div>
      </div>
    
    </>
  );
}


export default App;
