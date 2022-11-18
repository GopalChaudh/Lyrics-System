
const newlirics = [];

const body = document.querySelector('.lirics');
const line = document.querySelector('#line');
const timer = document.querySelector('#timer');
const next = ()=>{
    const new_block = {note:line.value,time:timer.value} 
    newlirics.push(new_block);
    console.log(newlirics);
    timer.value = ''
    line.value = ''
}

function start(){

    if(newlirics.length >0){
        body.innerHTML = ''
        body.style.border = '4px solid green'
        newlirics.map((e)=>{
            const randx= Math.floor(Math.random()*256);
            const randz = Math.floor(Math.random()*256);
            setTimeout(()=>{
                const notes = document.createElement('span')
                notes.style.color = `rgb(${randx},${255},${randz})`
                notes.innerHTML = e.note
                body.append(notes)
            },e.time*1000)
        })

    }
    else{
        body.innerHTML = ''
        const notes = document.createElement('span')
                notes.style.color = `red`
                notes.innerText = 'add the lirics first'
                body.append(notes)

    }
}