import React,{ useState, useEffect } from 'react';
import styled from 'styled-components'


function HistoryItem({itemDetailes}){

   return(
    <ItemWrapper>
        <RowWrapper>
             <Title>UserId:</Title>
            <Data>{itemDetailes.userId}</Data>
       </RowWrapper>
       <RowWrapper>
            <Title>Date:</Title>
            <Data>{itemDetailes.rideDatetime}</Data>
       </RowWrapper>
       <RowWrapper>
            <Title>From:</Title>
            <Data>{itemDetailes.from}</Data>
            <Title>To:</Title>
            <Data>{itemDetailes.to}</Data>
    </RowWrapper>
     </ItemWrapper>

   );
};

const ItemWrapper = styled.div`
 display:flex;
 font-size:15px;
 justify-content: center;
 border-style: inset;
 border-color: #87CEEB ;
 width:300px;
 margin-top:10px;
 flex-direction:column;
 margin-left:40px;
 padding:10px;
 background-color: #F5FFFA
 ;
 
`


const RowWrapper = styled.div`
display:flex;
flex-direction:row;`

const Title = styled.div`
 display:flex;
 font-family: Segoe Print, Helvetica, sans-serif;
 margin-right:8px;
 padding-left:20px;
 font-weight: bold;
`
const Data = styled.div`
 display:flex;
 font-family: Segoe Print, Helvetica, sans-serif;

`
export default HistoryItem;