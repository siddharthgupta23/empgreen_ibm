document.addEventListener("DOMContentLoaded", function() {
  let btn = document.querySelector("#btn1");
  let input = document.querySelectorAll("input");
  let terms = document.querySelector('#terms');
  let checkbox = document.querySelector("#check");
  let radioButtons = document.querySelectorAll("input[type='radio']");

  let show = document.querySelector('.show');
  let msg = document.querySelector(".msg");
  let part=document.querySelector('.part');
  let form = document.querySelector("form");
  form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("Button clicked");  
  
  });

  btn.addEventListener('click', () =>{
    let isEmpty = Array.from(input).some(i => i.value === "");
    let selectedRadio = Array.from(radioButtons).find(r => r.checked);

    if (isEmpty) {
      alert("Kindly fill all the data");
    }
  
    if(!checkbox.checked){
      terms.textContent = "*Kindly Accept the Privacy Notice*";
    }

  
    if (!selectedRadio) {
      alert("Please Select an option of these questions");
    }
    
  function prevent(event){
    if(!isEmpty){
      if(checkbox.checked){
        if(radioButtons){
          msg.textContent = `Thank you for choosing us! The form has been submitted successfully. We will contact you soon`
         show.classList.remove("hide");
         part.style.display = "none";
         prevent(event);
         
      }
    }
  }}
  prevent();
})

  })
  
  








