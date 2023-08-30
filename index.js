  let answer="";


//  let cal=document.querySelector("input").addEventListener("change",(e)=>{
//     // answer=e.target.value;
//     console.log(e.target.value);
//  })




const calculate=()=>{
    let select=document.querySelector("#choose").value;
    let select1=document.querySelector("#choose1").value;
    answer=document.querySelector("input").value;

    // Celsius to Fahrenheit 
   if(select==1 && select1=="6"){
    
    answer=(Number(answer)*1.8)+32;
    document.querySelector(".ans").innerHTML=answer;

   }

//    Celsius to kelvin
   else if(select==1 && select1=="7"){
    answer= Number(answer) + (273.15);
    document.querySelector(".ans").innerHTML=answer;

   }

//    Celsius to rankine
   else if(select==1 && select1=="8"){
    answer=(Number(answer)+273.15)*1.8;
    document.querySelector(".ans").innerHTML=answer;

   }
// Fahrenheit  to  Celsius
else if(select==2 && select1 =="5"){
   answer=(Number(answer)-32)*5/9;
    document.querySelector(".ans").innerHTML=answer;

   }

//    Fahrenheit  to  kelvine

else if(select==2 && select1 =="7"){
    answer=(Number(answer)-32)/1.8+273.15;
     document.querySelector(".ans").innerHTML=answer;
 
    }

    // Fahrenheit  to  rankine

    else if(select==2 && select1 =="8"){
        answer=Number(answer)+459.67;
         document.querySelector(".ans").innerHTML=answer;
     
        }

        // kelvine to  Celsius
        else if(select==3 && select1 =="5"){
            answer=Number(answer)-273.15;
             document.querySelector(".ans").innerHTML=answer;
         
            }

            // kelvine to  Fahrenheit 

            else if(select==3 && select1 =="6"){
                answer = (((Number(answer)-273.15)*9)/5)+32;
                 document.querySelector(".ans").innerHTML=answer;
             
                }

                // kelvine to  rankine

                else if(select==3 && select1 =="8"){
                    answer = Number(answer)*1.8;
                     document.querySelector(".ans").innerHTML=answer;
                 
                    }

                    //rankine to Celsius
                    else if(select==4 && select1 =="5"){
                        answer = (Number(answer)-491.67)/1.8;
                         document.querySelector(".ans").innerHTML=answer;
                     
                        }
                        // rankine to  Fahrenheit 
                    
                        else if(select==4 && select1 =="6"){
                            answer = (Number(answer)-459.67);
                             document.querySelector(".ans").innerHTML=answer;
                         
                            }
                            //rankine to  kelvine

                            else if(select==4 && select1 =="7"){
                                answer = (Number(answer)/1.8);
                                 document.querySelector(".ans").innerHTML=answer;
                             
                                }

                                // if try  Celsius to Celsius
                                //if try   Fahrenheit  to  Fahrenheit 
                                //  if try   kelvine to kelvine
                                //if try rankine to rankine
                         else{
                        alert("you select same term");
                      }



}


const clearvalue= ()=>{
    answer="";
    document.querySelector("input").value=answer;
    document.querySelector(".ans").innerHTML=answer;
}






