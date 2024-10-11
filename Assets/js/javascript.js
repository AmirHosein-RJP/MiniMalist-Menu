const accordionHeader = document.querySelectorAll('.accordionHeader')
const description = document.querySelectorAll('.accordionHeader>p')
const icon = document.querySelectorAll('.title>figure>img')
const mouseCursor = document.querySelector('.mouseCursor')
const images = document.querySelectorAll('.mainIMGs>img')


window.addEventListener('mousemove', (e) => {
    let cx = e.clientX
    let cy = e.clientY

    mouseCursor.style.top = cy + 'px'
    mouseCursor.style.left = cx + 'px'
})

window.addEventListener('mousedown', () => {
    mouseCursor.style.transform = 'scale(.7)translate(3%,3%)'
})

window.addEventListener('mouseup', () => {
    mouseCursor.style.transform = 'scale(1)translate(3%,3%)'
})


description.forEach((el) => {
    el.setAttribute('data-descHeight', el.clientHeight)

    el.style.height = '0'
    el.style.paddingBlock = '0'
})


accordionHeader.forEach((el, index) => {
    if(index == 0){
        let descHeight = el.children[1].getAttribute('data-descHeight')
        el.children[1].style.height = descHeight + 'px'
        el.children[1].style.paddingBlock = '15px'
        el.children[1].style.opacity = '1'
        el.children[0].children[1].style.transform = 'rotate(225deg)'
        images[0].style.opacity = '1'
    }

    el.addEventListener('click', () => {
        description.forEach((val) => {
            val.style.height = '0'
            val.style.paddingBlock = '0'
            val.style.transition = '.5s'
            val.style.opacity = '0'
            val.parentElement.children[0].children[1].style.transform = 'rotate(0deg)'
            val.parentElement.children[0].children[1].style.transition = '.5s'
        })

        images.forEach((val2) => {
            val2.style.opacity = '0'
            val2.style.transition = '.3s'
        })

        let flag = 0
        if(flag == 0){
            let descHeight = el.children[1].getAttribute('data-descHeight')
            el.children[1].style.height = descHeight + 'px'
            el.children[1].style.paddingBlock = '15px'
            el.children[1].style.opacity = '1'
            el.children[1].style.transition = '.5s'
            el.children[0].children[1].style.transform = 'rotate(225deg)'
            el.children[0].children[1].style.transition = '.5s'
            images[index].style.opacity = '1'
            images[index].style.transition = '.3s'
            flag++
        }
        else{
            el.children[1].style.height = '0'
            el.children[1].style.paddingBlock = '0'
            el.children[1].style.transition = '.5s'
            el.children[1].style.opacity = '0'
            images[index].style.opacity = '0'
            images[index].style.transition = '.3s'
            flag = 0
        }
    })
})