import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import Sdata from './Sdata';

function ncard(val){
  return(
    <Card imgsrc={val.imgsrc}
    tittle={val.tittle}
    sname={val.sname}
    link={val.link}
    />
  )

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
  
    
    {/* <Card imgsrc={Sdata[0].imgsrc}
    tittle={Sdata[0].tittle}
    sname={Sdata[0].sname}
    link={Sdata[0].link}
    />
    <Card imgsrc={Sdata[1].imgsrc}
    tittle={Sdata[1].tittle}
    sname={Sdata[1].sname}
    link={Sdata[1].link}
    />
    <Card imgsrc={Sdata[2].imgsrc}
    tittle={Sdata[2].tittle}
    sname={Sdata[2].sname}
    link={Sdata[2].link}
    />
    <Card imgsrc={Sdata[3].imgsrc}
    tittle={Sdata[3].tittle}
    sname={Sdata[3].sname}
    link={Sdata[3].link}
    />
    <Card imgsrc={Sdata[4].imgsrc}
    tittle={Sdata[4].tittle}
    sname={Sdata[4].sname}
    link={Sdata[4].link}
    /> */}
   { Sdata.map(ncard)}

   </>
);

