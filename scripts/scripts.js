function imgScroll(){
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({triggerElement: "main", duration: 2000})
    .setTween("#coffee", {top: '300px', transform: 'rotate(10deg)', right: '-12vw'}) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "2 (duration: 2000)"}) // add indicators (requires plugin)
    .addTo(controller);

    var scene2 = new ScrollMagic.Scene({triggerElement: "#conhecimentos", duration: 1500})
    .setTween("#plant", {left: '-8vw'}) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "2 (duration: 2000)"}) // add indicators (requires plugin)
    .addTo(controller);

    var scene3 = new ScrollMagic.Scene({triggerElement: "#conhecimentos", duration: 2200})
    .setTween("#book", {right: '-400px'}) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "2 (duration: 2000)"}) // add indicators (requires plugin)
    .addTo(controller);
}
imgScroll();

const cards = document.querySelectorAll('.exp-cards .card')
cards.forEach(card =>{
    const img = card.querySelector('img')
    card.addEventListener('mouseenter', ()=>{
        img.classList.add(`proj${card.dataset.card}`)
    })
    card.addEventListener('mouseleave', ()=>{
        img.classList.remove(`proj${card.dataset.card}`)
    })
})


