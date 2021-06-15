const accordionItems = document.querySelectorAll('.we-work-accordions__item');
const procedureItems = document.querySelectorAll('.we-work-procedure__item');

accordionItems.forEach(el => el.addEventListener('click',  () => clickOnItemAccordion (el)));

function clickOnItemAccordion (el) {
    const currentP = document.querySelector('.accordion' + el.id);
    if ( currentP.style.display === 'block' ) {
        currentP.style.display = 'none';
        el.querySelector('.we-work-accordions__item-number').style.color = '#393939';
        el.querySelector('.we-work-accordions__item-switch').style.transform = 'rotate(0deg)'
        el.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    } else {
        currentP.style.display = 'block';
        el.querySelector('.we-work-accordions__item-number').style.color = '#FF834E';
        el.querySelector('.we-work-accordions__item-switch').style.transform = 'rotate(180deg)'
        el.style.borderBottom = 'none';
    }
}

procedureItems.forEach(el => el.addEventListener('mouseover', () => hoverOnItemProcedure (el)));
procedureItems.forEach(el => el.addEventListener('mouseout', () => outOnItemProcedure (el)));
procedureItems.forEach(el => el.addEventListener('click', () => clickOnItemProcedure (el)));

function hoverOnItemProcedure (el) {
    el.querySelector('.we-work-procedure__item-number').style.cssText = 'color: #EF8B54; opacity: 100%';
    console.log(el.querySelector('.we-work-procedure__item-img'));
}

function outOnItemProcedure (el) {
    el.querySelector('.we-work-procedure__item-number').style.cssText = 'color: #FFFFFF; opacity: 10%';
}

function clickOnItemProcedure (el) {
    console.log('1', el)
    const currentEl = el.querySelector('.we-work-procedure__item-number');
    const currentName = el.querySelector('.we-work-procedure__item-name');
    // if (currentEl.style.color === '#EF8B54') {
    //     console.log(1)
    //     currentEl.style.cssText = 'color: #FFFFFF; opacity: 10%';
    // } else {
    //     console.log(2)
    // currentName.textContent = 'Подробнее'
    // currentEl.style.cssText = 'color: #EF8B54; opacity: 100%';
    // }
}
