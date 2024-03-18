import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import './BusSchedulePage.css';

function BusSchedulePage() {
  const [dayType, setDayType] = useState('평일');
  const [direction, setDirection] = useState('역으로');


  const handleDayTypeChange = (e) => {
    setDayType(e.target.value);
  };

  const handleDirectionClick = (direction = '역으로') => {
    setDirection(direction);
    const button = document.querySelector(`.button[data-direction="${direction}"]`);
    if (button) {
      button.classList.add('clicked');
    }
  };

  useEffect(() => {
    // 페이지가 처음 로드될 때 역으로 버튼에 'clicked' 클래스 추가
    handleDirectionClick('역으로');
  }, []); // 빈 배열은 페이지가 처음 로드될 때만 useEffect가 실행되도록 합니다.


  return (
    <div>
      <Banner />
      <div className="bus-container">
        <div className="radio-inputs">
            <label className="radio">
              <input type="radio" name="radio" value="평일" defaultChecked={true} onChange={handleDayTypeChange} />
              <span className="name">평일</span>
            </label>
            <label className="radio">
              <input type="radio" name="radio" value="주말 및 공휴일" onChange={handleDayTypeChange} />
              <span className="name">주말 및 공휴일</span>
            </label>
            <label className="radio">
              <input type="radio" name="radio" value="방학" onChange={handleDayTypeChange} />
              <span className="name">방학</span>
            </label>
        </div>
        <div className="white-box-2">
          <div className="buttons">
            <button className={`button ${direction === '역으로' ? 'clicked' : ''}`} onClick={() => handleDirectionClick('역으로')}>
              <span className="text">역으로</span>
            </button>
            <button className={`button ${direction === '학교로' ? 'clicked' : ''}`} onClick={() => handleDirectionClick('학교로')}>
              <span className="text">학교로</span>
            </button>
          </div>
        {dayType === '평일' && direction ==='역으로' && (
          <div className="schedule">
            <table>
              <thead>
                <tr>
                  <th>버스 노선</th>
                  <th>부산대</th>
                  <th>밀양역</th>
                  <th>영남루</th>
                  <th>터널 통과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7번</td>
                  <td>7 : 02</td>
                  <td>7 : 18</td>
                  <td>7 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>8 : 40</td>
                  <td>8 : 52</td>
                  <td>8 : 59</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>8 : 53</td>
                  <td>9 : 12</td>
                  <td>9 : 19</td>
                  <td></td>
                </tr>
                <tr>
                  <td>아리랑</td>
                  <td>9 : 20</td>
                  <td>9 : 26</td>
                  <td>X</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>9 : 43</td>
                  <td>10 : 00</td>
                  <td>10 : 07</td>
                  <td></td>
                </tr>
                <tr>
                  <td>4-1번</td>
                  <td>10 : 13</td>
                  <td>10 : 30</td>
                  <td>X</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>10 : 38</td>
                  <td>10 : 52</td>
                  <td>10 : 59</td>
                  <td></td>
                </tr>
                <tr>
                  <td>아리랑</td>
                  <td>11 : 10</td>
                  <td>11 : 16</td>
                  <td>X</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>1-2번</td>
                  <td>12 : 18</td>
                  <td>12 : 34</td>
                  <td>12 : 41</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>13 : 02</td>
                  <td>13 : 16</td>
                  <td>13 : 23</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>13 : 28</td>
                  <td>13 : 44</td>
                  <td>13 : 51</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {dayType === '평일' && direction ==='학교로' && (
          <div className="schedule">
            <table>
              <thead>
                <tr>
                  <th>버스 노선</th>
                  <th>영남루</th>
                  <th>밀양역</th>
                  <th>부산대</th>
                  <th>터널 통과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1번</td>
                  <td>7 : 02</td>
                  <td>7 : 18</td>
                  <td>7 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>9 : 25</td>
                  <td>9 : 35</td>
                  <td>9 : 43</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>9 : 53</td>
                  <td>10 : 05</td>
                  <td>10 : 13</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>7번</td>
                  <td>X</td>
                  <td>11 : 26</td>
                  <td>11 : 38</td>
                  <td></td>
                </tr>
                <tr>
                  <td>4-1번</td>
                  <td>10 : 13</td>
                  <td>10 : 30</td>
                  <td>X</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>10 : 38</td>
                  <td>10 : 52</td>
                  <td>10 : 59</td>
                  <td></td>
                </tr>
                <tr>
                  <td>7-1번</td>
                  <td>11 : 56</td>
                  <td>12 : 16</td>
                  <td>12 : 23</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1-2번</td>
                  <td>12 : 18</td>
                  <td>12 : 34</td>
                  <td>12 : 41</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>13 : 02</td>
                  <td>13 : 16</td>
                  <td>13 : 23</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>13 : 28</td>
                  <td>13 : 44</td>
                  <td>13 : 51</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>15 : 28</td>
                  <td>15 : 44</td>
                  <td>15 : 51</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {dayType === '주말 및 공휴일' && direction ==='역으로' && (
          <div className="schedule">
            <table>
              <thead>
                <tr>
                  <th>버스 노선</th>
                  <th>부산대</th>
                  <th>밀양역</th>
                  <th>영남루</th>
                  <th>터널 통과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2번</td>
                  <td>7 : 20</td>
                  <td>7 : 35</td>
                  <td>7 : 42</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>8 : 53</td>
                  <td>9 : 10</td>
                  <td>9 : 17</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>10 : 38</td>
                  <td>10 : 55</td>
                  <td>11 : 02</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>12 : 18</td>
                  <td>12 : 40</td>
                  <td>12 : 47</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>13 : 02</td>
                  <td>13 : 16</td>
                  <td>13 : 23</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>13 : 28</td>
                  <td>13 : 44</td>
                  <td>13 : 51</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>15 : 28</td>
                  <td>15 : 45</td>
                  <td>15 : 52</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>15 : 44</td>
                  <td>16 : 00</td>
                  <td>16 : 07</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>17 : 02</td>
                  <td>17 : 15</td>
                  <td>17 : 22</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>17 : 40</td>
                  <td>18 : 00</td>
                  <td>18 : 07</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1-2번</td>
                  <td>18 : 18</td>
                  <td>18 : 30</td>
                  <td>18 : 37</td>
                  <td>O</td>
                </tr>
              </tbody>
            </table>
           </div>
        )} 
        {dayType === '주말 및 공휴일' && direction ==='학교로' && (
          <div className="schedule">
            <table>
              <thead>
                <tr>
                  <th>버스 노선</th>
                  <th>영남루</th>
                  <th>밀양역</th>
                  <th>부산대</th>
                  <th>터널 통과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1번</td>
                  <td>8 : 02</td>
                  <td>8 : 18</td>
                  <td>8 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>8 : 34</td>
                  <td>8 : 45</td>
                  <td>8 : 53</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>9 : 25</td>
                  <td>9 : 35</td>
                  <td>9 : 43</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>9 : 53</td>
                  <td>10 : 05</td>
                  <td>10 : 13</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>7번</td>
                  <td>X</td>
                  <td>11 : 26</td>
                  <td>11 : 38</td>
                  <td></td>
                </tr>
                <tr>
                  <td>7번</td>
                  <td>X</td>
                  <td>12 : 18</td>
                  <td>12 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>7번</td>
                  <td>13: 03</td>
                  <td>13 : 18</td>
                  <td>13 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>X</td>
                  <td>14 : 18</td>
                  <td>14 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>X</td>
                  <td>15 : 18</td>
                  <td>15 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>7번</td>
                  <td>X</td>
                  <td>16 : 18</td>
                  <td>16 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>7번</td>
                  <td>X</td>
                  <td>17 : 45</td>
                  <td>17 : 57</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
           </div>
        )} 
        {dayType === '방학' && direction ==='역으로' && (
          <div className="schedule">
            <table>
              <thead>
                <tr>
                  <th>버스 노선</th>
                  <th>부산대</th>
                  <th>밀양역</th>
                  <th>영남루</th>
                  <th>터널 통과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7번</td>
                  <td>7 : 02</td>
                  <td>7 : 18</td>
                  <td>7 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>7 : 37</td>
                  <td>7 : 56</td>
                  <td>8 : 03</td>
                  <td></td>
                </tr>
                <tr>
                  <td>7번</td>
                  <td>8 : 37</td>
                  <td>8 : 56</td>
                  <td>9 : 03</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>8 : 53</td>
                  <td>9 : 12</td>
                  <td>9 : 19</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>9 : 53</td>
                  <td>10 : 05</td>
                  <td>10 : 13</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>10 : 53</td>
                  <td>11 : 05</td>
                  <td>11 : 13</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>7번</td>
                  <td>X</td>
                  <td>11 : 26</td>
                  <td>11 : 38</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1-2번</td>
                  <td>12 : 18</td>
                  <td>12 : 34</td>
                  <td>12 : 41</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>13 : 48</td>
                  <td>14 : 00</td>
                  <td>14 : 07</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>13 : 53</td>
                  <td>14 : 05</td>
                  <td>14 : 13</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>15 : 28</td>
                  <td>15 : 44</td>
                  <td>15 : 51</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
           </div>
        )} 
        {dayType === '방학' && direction ==='학교로' && (
          <div className="schedule">
            <table>
              <thead>
                <tr>
                  <th>버스 노선</th>
                  <th>영남루</th>
                  <th>밀양역</th>
                  <th>부산대</th>
                  <th>터널 통과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1번</td>
                  <td>7 : 02</td>
                  <td>7 : 18</td>
                  <td>7 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>8 : 02</td>
                  <td>8 : 18</td>
                  <td>8 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>7번</td>
                  <td>8 : 32</td>
                  <td>8 : 38</td>
                  <td>8 : 45</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>9 : 02</td>
                  <td>9 : 18</td>
                  <td>9 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>7번</td>
                  <td>10 : 02</td>
                  <td>10 : 18</td>
                  <td>10 : 25</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>10 : 53</td>
                  <td>11 : 05</td>
                  <td>11 : 13</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>7번</td>
                  <td>X</td>
                  <td>11 : 26</td>
                  <td>11 : 38</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>12 : 02</td>
                  <td>12 : 18</td>
                  <td>12 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>13 : 02</td>
                  <td>13 : 18</td>
                  <td>13 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>14 : 02</td>
                  <td>14 : 18</td>
                  <td>14 : 25</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>1번</td>
                  <td>15 : 28</td>
                  <td>15 : 44</td>
                  <td>15 : 51</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
           </div>
        )} 
        </div>
      </div>
      <Footer page='bus' />
    </div>
  );
}

export default BusSchedulePage;