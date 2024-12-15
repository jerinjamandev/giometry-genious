const plgram=()=>{
   const PBase=document.getElementById('p-base');
   const pValue=PBase.value;
    const pResult=parseFloat(pValue);
    console.log(pResult);



    const pHeight=document.getElementById('p-height');
    const pValue2=pHeight.value;
     const pResult2=parseFloat(pValue2);
     console.log(pResult2);


    const TotalId=document.getElementById('parallelogram-Area');
    const TotalResult=pResult*pResult2;
    TotalId.innerText=TotalResult;
}


    
    





   