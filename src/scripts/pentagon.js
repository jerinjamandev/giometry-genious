   function pentagonArea(){
   const perimeter=getInputValueById('Pentagon-perimeter');
   const apathem=getInputValueById('Pentagon-apothem');
   console.log(apathem,perimeter);

   const area=0.5*perimeter*apathem;
   setInnerTextById('pentagon-area',area);

}

    function getInputValueById(inputfeildId){
    const inputfeild=document.getElementById(inputfeildId);
    const inputText=inputfeild.value;
    const result=parseFloat(inputText);
    return result;

}

//akhn function set korbo

    function setInnerTextById(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
} 