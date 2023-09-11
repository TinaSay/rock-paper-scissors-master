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

    console.log(result)
}

