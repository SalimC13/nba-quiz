let input1 = document.querySelector(".answerOne");
let input2 = document.querySelector(".answerTwo");
let button = document.querySelector("button");

button.onclick=function(){
   console.log("button check");
 let answerOne = input1.value;
 let answerTwo = input2.value;
 let jordanImg = document.querySelector(".jordan-img");
 let h1 = document.querySelector(".heading");
  
  if(answerOne >= 35 && answerTwo === "bigs"){
    jordanImg.src= "reem.jpg";
    h1.innerHTML="Your G.O.A.T is Kareem Abdul-Jabbar";
    }
    else if(answerOne <= 35 && answerTwo === "bigs"){
      jordanImg.src="shaq.jpg";
      h1.innerHTML="Your G.O.A.T is Shaquille O'Neal";
    } 
    else if(answerOne <= 35 && answerTwo === "guards"){
      jordanImg.src="bron.jpg";
      h1.innerHTML="Your G.O.A.T is LeBron James";
    }
    else if(answerOne >= 35 && answerTwo === "guards"){
      jordanImg.src="jordan.jpg";
      h1.innerHTML="Your G.O.A.T is Michael Jordan";
    }
    else{
      alert("Wrong input")
    }
 };
