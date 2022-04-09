const spins = document.querySelector('#spins');
const slotImg = document.querySelector('#slot-img');
const columnFirst = document.querySelector('.col-first');
const columnSecond = document.querySelector('.col-second');
const columnThird = document.querySelector('.col-third');
let currentSpins = document.querySelector('#current-spins');
const secondStep = document.querySelector('#second-step');
const firstStep = document.querySelector('#first-step');
const slotSpinBtns = document.querySelectorAll('.action-spin');
let spinsValue = 3;
let spinsActive = false;

const rotation = () => {

    if(!spinsActive && spinsValue >= 1){
        spinsActive = true;
        currentSpins.innerHTML = `${--spinsValue} `;
        if(document.documentElement.clientWidth > 1650){
            if(spinsValue === 2){
                slotImg.classList.add('active')
                columnFirst.style.bottom = '-1475px'
                columnSecond.style.bottom = '-1919px'
                columnThird.style.bottom = '-2255px'
            }else if(spinsValue === 1){
                slotImg.classList.add('active')
                columnFirst.style.bottom = '-3027px'
                columnSecond.style.bottom = '-3596px'
                columnThird.style.bottom = '-4600px'
            }else if(spinsValue === 0){
                slotImg.classList.add('active')
                columnFirst.style.bottom = '-4484px'
                columnSecond.style.bottom = '-5277px'
                columnThird.style.bottom = '-6856px'

                setTimeout(()=>{
                    firstStep.classList.remove('active');
                    secondStep.classList.add('active');
                }, 5000)
            }
        }else if(document.documentElement.clientWidth < 1650 && document.documentElement.clientWidth > 650){
            if(spinsValue === 2){
                slotImg.classList.add('active')
                columnFirst.style.bottom = '-1464px'
                columnSecond.style.bottom = '-1912px'
                columnThird.style.bottom = '-2230px'
            }else if(spinsValue === 1){
                slotImg.classList.add('active')
                columnFirst.style.bottom = '-3050px'
                columnSecond.style.bottom = '-3623px'
                columnThird.style.bottom = '-4585px'
            }else if(spinsValue === 0){
                slotImg.classList.add('active')
                columnFirst.style.bottom = '-4446px'
                columnSecond.style.bottom = '-5277px'
                columnThird.style.bottom = '-6940px'

                setTimeout(()=>{
                    firstStep.classList.remove('active');
                    secondStep.classList.add('active');
                }, 5000)
            }
        }else if(document.documentElement.clientWidth < 656){
            if(spinsValue === 2){
                slotImg.classList.add('active')
                columnFirst.style.bottom = '-1472px'
                columnSecond.style.bottom = '-1974px'
                columnThird.style.bottom = '-2229px'
            }else if(spinsValue === 1){
                slotImg.classList.add('active')
                columnFirst.style.bottom = '-3067px'
                columnSecond.style.bottom = '-3617px'
                columnThird.style.bottom = '-4585px'
            }else if(spinsValue === 0){
                slotImg.classList.add('active')
                columnFirst.style.bottom = '-4529px'
                columnSecond.style.bottom = '-5288px'
                columnThird.style.bottom = '-6935px'

                setTimeout(()=>{
                    firstStep.classList.remove('active');
                    secondStep.classList.add('active');
                }, 5000);
            }
        }

        setTimeout(()=> {
            slotImg.classList.remove('active');
            spinsActive = false;
        }, 4000 );

    }

};

for(let btn of slotSpinBtns){
    btn.addEventListener('click', rotation)
}

