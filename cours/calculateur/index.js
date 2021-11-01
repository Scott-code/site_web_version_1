const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
console.log(result);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});




const options = {
  root: null,
  rootMargin: '0px',
  threshold: .1
}






const anil=function(entries,observer){


entries.forEach(function(entry){


if(entry.intersectionRatio>.1){


entry.target.classList.add("reveal-visible")

}


})





}





const observer=new IntersectionObserver(anil,options)




document.querySelectorAll(".reveal").forEach(function(z){


observer.observe(z)

})


