const rock=document.getElementById('r');
const scissors=document.getElementById('s');
const paper=document.getElementById('p');

    [rock,scissors,paper].forEach((value,index)=>{
        value.addEventListener('click',(e)=>{
            game(e.target.id);
        })
    })


const computerChoice=()=>{
    const choices=['r','s','p']
    return choices[Math.floor(Math.random()*3)];

}


const game=(choice)=>{
    let cChoice=computerChoice();
    let choices=choice+cChoice
    let result;
    console.log(choice)
    console.log(cChoice)
    console.log(choices)

    switch (choices) {
        case 'pp':
        case 'ss':
        case 'rr':
            result='draw';
            break;
        case 'ps':
        case 'sr':
        case 'rp':
            result='You lost';
            break;
        case 'pr':
        case 'sp':
        case 'rs':
            result='You win'
            break;
    }

   setTimeout(()=>{
       battleView(choice,cChoice)
   },400)
}

/**
 * Rules modal
 */

const rulesBtn=document.querySelector('.rules')
const overlay=document.querySelector('.overlay')
const modal=document.querySelector('.modal')
const closeModal=document.querySelector('.close_modal')

rulesBtn.addEventListener('click',(e)=>{
    overlay.style.display="flex"
    overlay.style.opacity="0.7"
    modal.style.top="50%"
})

closeModal.addEventListener('click',(e)=>{
    overlay.style.display="none"
    overlay.style.opacity="0"
    modal.style.top="-1000%"
})

overlay.addEventListener('click',(e)=>{
    const target=e.currentTarget
    target.addEventListener('click',e=>{
        overlay.style.display="none"
        overlay.style.opacity="0"
        modal.style.top="-1000%"
    })
})

/* You picked/ House picked */

const yourChoiceImg=document.querySelector('.yourChoiceImg')
const theirChoiceImg=document.querySelector('.theirChoiceImg')
const playground=document.querySelector('.playground')
const battle=document.querySelector('.battle')
const darkcircle=document.querySelector('.darkcircle')

const battleView=((choice,computerChoice)=>{
    playground.style.display="none"
    battle.style.display="flex"

    setImg(choice,yourChoiceImg)


    setTimeout(()=>{
        darkcircle.style.display="none"
        theirChoiceImg.style.display="block"
        setImg(computerChoice,theirChoiceImg)
    },3000)
})


const setImg=((choice,place)=>{
    switch (choice){
        case 'r':
            place.src="images/rock.png"
            break;
        case 's':
            place.src="images/scissors.png"
            break;
        case 'p':
            place.src="images/paper.png"
            break;
    }

})
