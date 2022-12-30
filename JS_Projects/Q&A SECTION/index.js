const questionsEl = document.querySelectorAll(".question");

/*In order to get each article separately we use for each  */
questionsEl.forEach((question)=>{
    console.log(question);
    const btnEl = question.querySelector(".question-btn");
    //console.log(btnEl);
    btnEl.addEventListener("click", ()=>{
        question.classList.toggle("show-text");
    })
})
