const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

/*const handler = (event ) => {console.log(b)
    console.dir(event)}*/
const handler1 = (event) => {
    console.dir(event.currentTarget.id)
}
/*
sm.onclick = handler*/
/*sm.removeEventListener()*/
sm.addEventListener('click',handler1)
md.addEventListener('click',handler1)
bg.addEventListener('click',handler1)
const a = document.getElementById('a')
a.addEventListener('click',(e)=>{
    e.preventDefault()

})
const xMarksTheSpot = (n) => {
    const arr = [];
    if(n.length === 0){
        return []
    } else
        for (let i = 0; i<=n.length;i++){
            for (let j; j<=n[i].length;j++){
                if(n[i][j] === 'x'){
                    arr.push(i,j)
                }
            }
        }
    if(arr.length === 0) {
        return []
    }
}

