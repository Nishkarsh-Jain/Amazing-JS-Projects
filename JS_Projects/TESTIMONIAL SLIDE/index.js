const testimonials = [
  {
    name: "-Antonella Q",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    text: "Frontend Developer is the most valuable business resource we have EVER purchased. Without Frontend Developer, we would have gone bankrupt by now. Frontend Developer is great. I don't know what else to say.5",
  },
  {
    name: "-Nedda J",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&usqp=CAU",
    text: "I made back the purchase price in just 48 hours! I can't say enough about Frontend Developer. Frontend Developer is the real deal!",
  },
  {
    name: "-Ole L",
    imgUrl:
      "https://lenstax.com/auth/app-assets/images/profile/user-uploads/user-04.jpg",
    text: "I love Frontend Developer. Frontend Developer should be nominated for service of the year. I didn't even need training. After using Frontend Developer my business skyrocketed!",
  },
];

const imageEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let index=0;

updateTestimonials()

function updateTestimonials(){
const {name, imgUrl, text}=testimonials[index];
imageEl.src=imgUrl;
textEl.innerText=text;
usernameEl.innerText=name;
index++;
if(index===testimonials.length){
    index=0;
}
setTimeout(()=>{updateTestimonials()}, 3000)
}
