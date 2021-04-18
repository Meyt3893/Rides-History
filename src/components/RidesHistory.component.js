import React,{ useState, useEffect } from 'react';
import styled from 'styled-components'
import HistoryItem from '../components/HistoryItem.component'
import Footer from '../components/Footer.component'

function RidesHistory(){
   const [ridesHistory, setData] = useState([]);
   const [limit, setLimit] = useState(4);
   const [skip, setSkip] = useState(0);
    
   React.useEffect(function effectFunction() {
       fetch(`http://localhost:9000/api/v1/rides/1?limit=${limit}&skip=${skip}`)
           .then(response => response.json())
           .then(response => setData(response))
           .catch(error => {
            console.log(error);})      
   }, [skip]);

   const nextPage = () => {
    setSkip(skip + limit)
}

  const previousPage = () => {
    if(skip == 0)
    {
      return;
    }
      setSkip(skip - limit)
  }

   return(
      <div>
        <Title>Rides History</Title>
        <ItemsWrapper>
          {ridesHistory && ridesHistory.map((item,index)=>
          (
              <HistoryItem key = {index} itemDetailes = {item}></HistoryItem>
          ))}           
        </ItemsWrapper>
        <div> 
            <button onClick={previousPage}> Previous Page </button>
            <button onClick={nextPage}> Next Page </button> 
        </div>     
        <Footer></Footer>
      </div>
   );
};

const ItemsWrapper = styled.div `
  display:flex;
  padding-left:300px;
  flex-direction: column;
  width:600px; 
  flex: 1 1 auto;
  overflow-y: auto;
  height: 460px;
`
const Title = styled.div`
 display:flex;
 padding-left:420px;
 font-size:40px;
 color:#87CEEB;
 font-family: Segoe Print	 , Helvetica, sans-serif;
`


export default RidesHistory;