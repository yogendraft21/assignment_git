const pairs  = document.querySelectorAll('.pair')
const optionDivs = document.querySelectorAll('.options')

const mainContent = document.querySelectorAll('.main_content')
console.log(mainContent);

optionDivs.forEach((div)=>div.style.display='none');

pairs.forEach((pair,index)=>{
    pair.querySelector('.radio-button').addEventListener('change',()=>{
        optionDivs.forEach((div)=>div.style.display='none')
        optionDivs[index].style.display = 'flex'

        mainContent.forEach((div)=>div.classList.remove('selected'))
        mainContent[index].classList.add('selected')
    })
})