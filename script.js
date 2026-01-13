let ism = document.querySelector('.ism-input')
let zhanr = document.querySelector('.zhanr-input')
let reyting = document.querySelector('.reyting-input')
let knopka = document.querySelector('.dobavit-knopka')
let schet = document.querySelector('.schet')
let spisok = document.querySelector('.spisok-ul')
knopka.addEventListener('click', () => {
    if (
        ism.value === '' ||
        zhanr.value === '' ||
        reyting.value === ''
    ) return
    let element = document.createElement('li')
    let blokInfo = document.createElement('div')
    blokInfo.className = 'info'
    let tekst = document.createElement('div')
    let zagolovok = document.createElement('div')
    zagolovok.className = 'ism'
    zagolovok.textContent = ism.value
    let opisanie = document.createElement('div')
    opisanie.textContent = zhanr.value + ' | Рейтинг: ' + reyting.value
    tekst.append(zagolovok, opisanie)
    blokInfo.append(tekst)
    let deystviya = document.createElement('div')
    let zvezda = document.createElement('span')
    zvezda.className = 'zvezda'
    zvezda.textContent = '★'
    if (reyting.value < 8) {
        zvezda.style.color = 'rgb(255, 163, 25)'
    } else {
        zvezda.style.color = 'green'
    }
    let udalit = document.createElement('button')
    udalit.className = 'udalit'
    udalit.textContent = 'Удалить'
    udalit.addEventListener('click', () => {
        element.remove()
        schet.textContent = spisok.children.length
    })
    deystviya.append(zvezda, udalit)
    element.append(blokInfo, deystviya)
    spisok.append(element)
    schet.textContent = spisok.querySelectorAll('li').length
    nazvanie.value = ''
    zhanr.value = ''
    reyting.value = ''
})
let temaKnopka = document.querySelector('.tema-knopka')
temaKnopka.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if (document.body.className == 'dark') {
        temaKnopka.textContent = '☀️'
    } else {
        temaKnopka.textContent = '🌙'
    }
})
