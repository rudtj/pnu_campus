import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const TimeButton = styled.button`
    color: ${props => props.isSelected ? 'white' : 'green'}; // 선택된 시간은 글씨가 하얀색, 선택되지 않은 시간은 파란색
    background-color: ${props => props.isSelected ? 'green' : 'white'}; // 선택된 시간은 배경이 파란색, 선택되지 않은 시간은 흰색
    border: 1px solid green; // 테두리는 항상 파란색
    width: 100px;
    height: 30px;
`;

const TimeSelector = () => {
    const [selectedTimes, setSelectedTimes] = useState([]);

    const times = Array(15)
    .fill()
    .map((_, index) => {
      return 9 + index + ":00";
    });

    useEffect(() => {
      if (selectedTimes.length > 0) {
        sendSelectedTimes(selectedTimes);
      }
    }, [selectedTimes]);

  const handleSelectTime = time => {
    if (selectedTimes.length === 0) { // 선택된 시간이 없을 경우
      const indexOfTime = times.indexOf(time);
      const sliced = [...times].splice(indexOfTime, 3); // times 배열에서 선택한 요소부터 3개만 담은 배열
      setSelectedTimes(sliced);
    } else { // 선택된 시간이 있을 경우
      const indexOfSelected = selectedTimes.indexOf(time);
      if (indexOfSelected === 0) {
        setSelectedTimes(selected => [...selected].filter(el => el !== time)); //첫 번째 요소를 클릭했을 경우 그 요소만 삭제
      } else if (indexOfSelected !== -1) { // 선택된 요소중 하나를 클릭했을 경우
        const selected = [...selectedTimes];
        selected.splice(indexOfSelected, 2); // 선택된 요소 부터 마지막 요소까지 삭제
        setSelectedTimes(selected);
      }
    }
    sendSelectedTimes(selectedTimes);
  };

    return (
        <div style={{ marginBottom: '20px' }}>
            {times.map(time => (
                <TimeButton
                    key={time} // 각 시간을 key prop으로 사용
                    onClick={() => handleSelectTime(time)}
                    $isSelected={selectedTimes.find(selectedTime => selectedTime === time) ? true : false} // 선택된 시간인지 확인
                >
                    {time}
                </TimeButton>
            ))}
        </div>
    )
}

const sendSelectedTimes = (selectedTimes) => {
  axios.post('http://pnu-univ-miryang-campus-env.ap-northeast-2.elasticbeanstalk.com/', {
    start: selectedTimes[0],
    end: selectedTimes[selectedTimes.length - 1]
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(`Error: ${error}`)
  });
}

export default TimeSelector; 