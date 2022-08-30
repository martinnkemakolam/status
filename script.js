let image_viewer = document.getElementById('owner_img')
let file = document.getElementById('file')
let element = document.getElementById('view')
let right = document.getElementsByClassName('right')
let elementBtn = document.getElementById('closer')
let elementBtnDel = document.getElementById('delete')
let navBtnRight = document.getElementById('right')
let navBtnLeft = document.getElementById('left')
let navNum = 0;
let view = []
let vew;
let img;
file.onchange =(e)=>{
    vew = URL.createObjectURL(e.target.files[0])
    image_viewer.src = vew
    view.push(vew)
        img = `
        <div class="cont">
            <img src="${vew}" alt="">
        </div>`
    element.insertAdjacentHTML('beforeend' ,img)  
}
right[0].onclick = ()=>{
    element.classList.add('top')
    let cont = document.getElementsByClassName('cont')
    if (view.length === 0) {
        elementBtnDel.style.display = 'none'
    }else{
        cont[navNum].classList.toggle('active')
        elementBtnDel.style.display = 'block'
    }
    console.log(view.length)
}
elementBtn.onclick = ()=>{
    let cont = document.getElementsByClassName('cont')
    element.classList.remove('top')
    cont[navNum].classList.toggle('active')
}
navBtnRight.onclick = move;
navBtnLeft.onclick = moveback;
function move(){
    let cont = document.getElementsByClassName('cont')
    let check = cont.length - 1
    time = 3000
    if( check== navNum){
        cont[navNum].classList.remove('active')
        element.classList.remove('top')
    }else{
        cont[navNum].classList.toggle('active')
        navNum++
        cont[navNum].classList.toggle('active')
    }
}
function moveback(){
    let cont = document.getElementsByClassName('cont')
    if(navNum === 0 ){
         element.classList.remove('top')
         cont[navNum].classList.remove('active')
    }else{
        cont[navNum].classList.toggle('active')
        navNum--
        cont[navNum].classList.toggle('active')
    }
}
elementBtnDel.onclick = remove


function remove() {
    let cont = document.getElementsByClassName('cont')
    view.pop()
    let lastIndex = view.length - 1
    vew = view[lastIndex]
    image_viewer.src = vew
    let ele = element.lastElementChild
    ele.remove()
    if(navNum === 0 ){
        element.classList.remove('top')
        cont[navNum].classList.remove('active')
   }else{
       navNum--
       cont[navNum].classList.toggle('active')
   }
}