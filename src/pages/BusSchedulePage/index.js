import React, { useState } from 'react';
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
    document.querySelector(`.button[data-direction="${direction}"]`).classList.add('clicked'); // 클릭한 버튼에 'clicked' 클래스 추가
  };

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
            <button className="button" onClick={() => handleDirectionClick('역으로')} defaultChecked={direction === '역으로'}>
                <span className="circle1"></span>
                <span className="circle2"></span>
                <span className="circle3"></span>
                <span className="circle4"></span>
                <span className="circle5"></span>
                <span className="text">역으로</span>
            </button>
            <button className="button" onClick={() => handleDirectionClick('학교로')}>
                <span className="circle1"></span>
                <span className="circle2"></span>
                <span className="circle3"></span>
                <span className="circle4"></span>
                <span className="circle5"></span>
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
                  <td>7 : 20</td>
                  <td>7 : 32</td>
                  <td>7 : 39</td>
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
                  <td>7번</td>
                  <td>9 : 04</td>
                  <td>9 : 20</td>
                  <td>9 : 27</td>
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
                  <td>2번</td>
                  <td>9 : 56</td>
                  <td>10 : 12</td>
                  <td>10 : 19</td>
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
                  <td>7번</td>
                  <td>7 : 02</td>
                  <td>7 : 18</td>
                  <td>7 : 25</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2번</td>
                  <td>7 : 20</td>
                  <td>7 : 32</td>
                  <td>7 : 39</td>
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
                  <td>7번</td>
                  <td>9 : 04</td>
                  <td>9 : 20</td>
                  <td>9 : 27</td>
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
                  <td>2번</td>
                  <td>9 : 56</td>
                  <td>10 : 12</td>
                  <td>10 : 19</td>
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