//rectangle lenth
function rectangleAreaInput(){
    const lenthInput=document.getElementById('rectangle-length');
    const lenthText=lenthInput.value
    console.log(lenthText);


//rectangle width

    const widthInput=document.getElementById('rectangle-width');
    const widthText=widthInput.value
    console.log(widthText);

   
    const result=lenthText*widthText;
    console.log(result);

    const area=document.getElementById('rectangle-area');
   area.innerText=result;


}