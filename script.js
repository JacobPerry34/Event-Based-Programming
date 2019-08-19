// Create an input field in your DOM. Give it an id of message.
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.
const textAreaInput = document.querySelector("#message")
console.log(textAreaInput)

function widenInput(eventObject){
    whateverImTyping = eventObject.target;
    whateverImTyping.classList.add("wide-input")
}
const articleOne = document.querySelector("#article1")
console.log(articleOne)

const articleTwo = document.querySelector("#article2")
console.log(articleTwo)

textAreaInput.addEventListener("keyup", function(){
console.log(textAreaInput.value)
articleOne.innerHTML = textAreaInput.value;
articleTwo.innerHTML = textAreaInput.value; 
})







// articleOne.addEventListener("keyup",function(){
//     const textContentValue= document.querySelector("#message")
//     console.log(textContentValue)

//     const htmlString = `<article id= article1>${textContentValue}</p>`
//     console.log(htmlString);

//     const messageOutputArticle1 = document.querySelector("#article1");
//     messageOutputArticle1.innerHTML = htmlString;
// })

