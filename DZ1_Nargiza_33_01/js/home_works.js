//lesson1
const gmail_input = document.querySelector('#gmail_input')
const gmail_button = document.querySelector('#gmail_button')
const gmail_result = document.querySelector('#gmail_result')

const regExp=/^[a-zA-Z0-9]*@gmail.com$/
gmail_input.addEventListener('click',()=>{
    if (regExp.test(gmail_input.value)) {
        gmail_result.innerHTML='ok'
        gmail_result.style.color='green'
    } else {
        gmail_result.innerHTML='not'
        gmail_result.style.color='red'
    }
})
/*const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
const moveBlock = (position) => {
    if (position < ".parent_block".clientWidth - ".child_block".clientWidth) {
        position += 1;
        ".child_block".style.left = `449px`;
        setTimeout(() => moveBlock(position), 25);    }
}
moveBlock(0)
function requestAnimationFrame(position) {

}*/

//left 449 px part2dz
//requestAnimationFrame()

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
let position = 0;

function moveBlock() {
  if (position < parentBlock.clientWidth - childBlock.clientWidth) {
    position += 1;
    childBlock.style.left = `${position}px`;
    requestAnimationFrame(moveBlock);
  }
}

requestAnimationFrame(moveBlock);