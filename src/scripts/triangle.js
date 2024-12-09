function calculatorTriangleArea(){
   const trianglebaseinput = document.getElementById('triangle-base');
   const trianglebasetext  = trianglebaseinput.value;
   const base=parseFloat(trianglebasetext);
   console.log(base);


//get triangle height value

const triangleheightinput=document.getElementById('triangle-height');
const triangleheighttext=triangleheightinput.value;
const height=parseFloat(triangleheighttext)
console.log(height);



//calculate triangle

const area=0.5*base*height;
console.log(area);



//display triangle area

const triangleareaspan=document.getElementById("triangle-area");
triangleareaspan.innerText=area;
}