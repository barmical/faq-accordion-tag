const question1 = document.getElementsByClassName('first')[0]
const subquestion1 = document.getElementsByClassName('second')[0]
const arrow1 = document.querySelector('.arrow-1')
const question2 = document.getElementsByClassName('first')[1]
const subquestion2 = document.getElementsByClassName('second')[1]
const arrow2 = document.querySelector('.arrow-2')
const question3 = document.getElementsByClassName('first')[2]
const subquestion3 = document.getElementsByClassName('second')[2]
const arrow3 = document.querySelector('.arrow-3')
const question4 = document.getElementsByClassName('first')[3]
const subquestion4 = document.getElementsByClassName('second')[3]
const arrow4 = document.querySelector('.arrow-4')
const question5 = document.getElementsByClassName('first')[4]
const subquestion5 = document.getElementsByClassName('second')[4]
const arrow5 = document.querySelector('.arrow-5')


question1.addEventListener('click', function(){
    if (subquestion1.style.display === "block") {
        subquestion1.style.display = "none";
        arrow1.style.transform = 'rotate(0deg)'
    } else {
        subquestion1.style.display = "block";
        arrow1.style.transform = 'rotate(180deg)'
  }
})

arrow1.addEventListener('click', function(){
    if (subquestion1.style.display === "block") {
        subquestion1.style.display = "none";
        arrow1.style.transform = 'rotate(0deg)'
    } else {
        subquestion1.style.display = "block";
        arrow1.style.transform = 'rotate(180deg)'
  }
})

question2.addEventListener('click', function(){
    if (subquestion2.style.display === "block") {
        subquestion2.style.display = "none";
        arrow2.style.transform = 'rotate(0deg)'
    } else {
        subquestion2.style.display = "block";
        arrow2.style.transform = 'rotate(180deg)'
  }
})

arrow2.addEventListener('click', function(){
    if (subquestion2.style.display === "block") {
        subquestion2.style.display = "none";
        arrow2.style.transform = 'rotate(0deg)'
    } else {
        subquestion2.style.display = "block";
        arrow2.style.transform = 'rotate(180deg)'
  }
})

question3.addEventListener('click', function(){
    if (subquestion3.style.display === "block") {
        subquestion3.style.display = "none";
        arrow3.style.transform = 'rotate(0deg)'
    } else {
        subquestion3.style.display = "block";
        arrow3.style.transform = 'rotate(180deg)'
  }
})

arrow3.addEventListener('click', function(){
    if (subquestion3.style.display === "block") {
        subquestion3.style.display = "none";
        arrow3.style.transform = 'rotate(0deg)'
    } else {
        subquestion3.style.display = "block";
        arrow3.style.transform = 'rotate(180deg)'
  }
})

question4.addEventListener('click', function(){
    if (subquestion4.style.display === "block") {
        subquestion4.style.display = "none";
        arrow4.style.transform = 'rotate(0deg)'
    } else {
        subquestion4.style.display = "block";
        arrow4.style.transform = 'rotate(180deg)'
  }
})

arrow4.addEventListener('click', function(){
    if (subquestion4.style.display === "block") {
        subquestion4.style.display = "none";
        arrow4.style.transform = 'rotate(0deg)'
    } else {
        subquestion4.style.display = "block";
        arrow4.style.transform = 'rotate(180deg)'
  }
})

question5.addEventListener('click', function(){
    if (subquestion5.style.display === "block") {
        subquestion5.style.display = "none";
        arrow5.style.transform = 'rotate(0deg)'
    } else {
        subquestion5.style.display = "block";
        arrow5.style.transform = 'rotate(180deg)'
  }
})

arrow5.addEventListener('click', function(){
    if (subquestion5.style.display === "block") {
        subquestion5.style.display = "none";
        arrow5.style.transform = 'rotate(0deg)'
    } else {
        subquestion5.style.display = "block";
        arrow5.style.transform = 'rotate(180deg)'
  }
})



