var lazyLoad = new LazyLoad({
    elements_selector: ".lazy",
    unobserve_entered: true // Stop observing .horizContainer(s) after they entered
});

function imgScroll(){
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({triggerElement: "h1", duration: 1500})
    .setTween("#coffee", {transform: 'rotate(10deg)', right: '-0vw'}) // the tween durtion can be omitted and defaults to 1
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
    if (img) {
        card.addEventListener('mouseenter', ()=>{
            img.classList.add(`proj${card.dataset.card}`)
        })
        card.addEventListener('mouseleave', ()=>{
            img.classList.remove(`proj${card.dataset.card}`)
        })
    }
})


function showGit(){
    document.querySelector('.github').classList.remove('hide')
    document.querySelector('.yellowComp').classList.add('hide')
}

function showYellowCv(){
    document.querySelector('.yellowcv').classList.remove('hide')
    document.querySelector('.yellowComp').classList.add('hide')
}

function resetYellow(){
    document.querySelector('.github').classList.add('hide')
    document.querySelector('.yellowcv').classList.add('hide')
    document.querySelector('.yellowComp').classList.remove('hide')
}

function showLinkedin(){
    document.querySelector('.linkedin').classList.remove('hide')
    document.querySelector('.blueComp').classList.add('hide')
}

function showBlueCv(){
    document.querySelector('.blueCv').classList.remove('hide')
    document.querySelector('.blueComp').classList.add('hide')
}

function resetBlue(){
    document.querySelector('.linkedin').classList.add('hide')
    document.querySelector('.blueCv').classList.add('hide')
    document.querySelector('.blueComp').classList.remove('hide')
}