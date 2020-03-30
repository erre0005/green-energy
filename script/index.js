const p = console.log; //shortcut for printing

// get the preferences to interactive HTML elements
const ctrlBtns = document.querySelectorAll(`.controls .buttons`);
const cntr = document.querySelector(`.container`);

//create the array that will store the data on the page
let pages = [
    {
        heading: `Tidal Energy`,
        bodyText: `Is the form of hydropower that creates electricity from the energy that comes from the tides.`,
        thumb: `images/tidal.jpg`,
        alt: `Tidal Energy Image`,
    },
    {
        heading: `Solar Energy`,
        bodyText: `Is the technology that uses the sun's energy to create electricity and power multiple things from factories and houses to calculators and computers.`,
        thumb: `images/solar.jpg`,
        alt: `Solar Power Image`,
    },
    {
        heading: `Wind Energy`,
        bodyText: `Is the process of creating electricity by capturing kinetic energy from the wind using turbines.`,
        thumb: `images/wind.jpg`,
        alt: `Wind Power Image`,
    }
];

let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];
//create function that handles click-event
function clickBtn(e){
    //.target gets the element that triggers specific event
    let clickedButton = e.target;

    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let index = btnsArray.indexOf(clickedButton);
    //p(index);  

    //handle moving id-active to the curerently clicked button
    
        // remove currently present id="active-btn" reference brightspace week 6.
    for (let i = 0; i < ctrlBtns.length; i++){
        //ctrlBtns[i].id this means that current id has somethin in it
        if(ctrlBtns[i].id){ 
                //MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
            ctrlBtns[i].removeAttribute(`id`);
        }
    }
        //assign id="active-btn" to the currently clicked button
    clickedButton.id = `active-btn`;
    //load the corresponding data into div class="container"
    cntr.innerHTML = `
        <div class="data">
            <h2>${pages[index].heading}</h2>
            <div class="main-content"> 
                <img src="${pages[index].thumb}" alt="${pages[index].alt}"> </div>
                <p>${pages[index].bodyText}</p>
            </div>
        </div>
        `;
    
};
//register buttons for click event
for(let i = 0; i < ctrlBtns.length; i++) {
    ctrlBtns[i].addEventListener(`click`, clickBtn);   
}
