const chooseColor = document.querySelectorAll('.choose__color-btn');
const contentItem = document.querySelectorAll('.content__item');
// const burgerMenu =document.querySelector('.burger');

chooseColor.forEach(element => {
    element.addEventListener('click', open);
    console.log(element);
}) // пробегаемся с помощью forEach по всем element у которых есть event 'click'
function open(evt) {
    const target = evt.currentTarget; // найти объект на которого мы нажали
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);
    // 1
    chooseColor.forEach(item => {
        item.classList.remove('choose__color-btn--active')
    }) // пробегаемся с помощью forEach по всем item и убираем класс choose__color-btn--active
    //2
    target.classList.add('choose__color-btn--active'); // добавляем этому объекту класс choose__color-btn--active и он пропадает

    contentItem.forEach(item=>{
        item.classList.remove('content__item-active')
    })
    contentActive.forEach(item=>{
        item.classList.add('content__item-active')
    })
}
// burgerMenu.addEventListener('click',item=>{
//     item.classList.toggle('active');
//     const menu = document.querySelector('.menu');
//     menu.classList.toggle('open');
// })
document.querySelector('.burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
})