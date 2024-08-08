let btns =document.querySelectorAll(".btn")
let win=document.querySelector(".win")
let reset=document.querySelector(".reset")
let newgame=document.querySelector(".newgame")
let turn0=true
let count=0

const winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turn0){
            btn.innerHTML="0"
            count++
            turn0=false
        }
        else{
            btn.innerHTML="X"
            count++
            turn0=true
        }
        btn.disabled=true
        if(count>3){
            setTimeout(checkWin(),5000);
            
        }
    })

})

function checkWin(){
    for(let patterns of winPatterns){
        
        let pos1=  btns[patterns[0]].innerHTML
        let pos2 = btns[patterns[1]].innerHTML; 
        let pos3 = btns[patterns[2]].innerHTML; 
        
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                win.innerHTML=`Winner is ${pos1}`
                btns.forEach(btn=>btn.disabled=true)
                
            }
        }
    }
}

reset.addEventListener('click',()=>{
    let turn0=true
    let count=0
    btns.forEach(btn=>{
        btn.innerHTML=""
        btn.disabled=false
    })
    win.innerHTML=''
})
newgame.addEventListener('click',()=>{
    let turn0=true
    let count=0
    btns.forEach(btn=>{
        btn.innerHTML=""
        btn.disabled=false
    })
    win.innerHTML="New Game started"
})


