// We have all of these actions below that we wants to tie to an event!


let hoverCard = document.querySelector('[data-secret="hover"]');
hoverCard.addEventListener('mouseover', function(){
  
    let image = document.querySelector('.hidden-image');
    image.style.width = '100%';
    image.style.height = '100%';
    image.style.opacity = '1';
});


// 2. Add an event listener to make the image hidden again.
//  - The selector is hoverCard
//  - The event type is mouseout
hoverCard.addEventListener('mouseout', function(){
    let image = document.querySelector('.hidden-image');
    image.style.width = '0';
    image.style.height = '0';
    image.style.opacity = '0';
});



const clickCard = document.querySelector('[data-secret="click"]');
clickCard.addEventListener('click', function(){
// 3. Add an event listener to reveal and animate the shape on click.
//  - The selector is clickCard
//  - The event type is click

    clickCard.classList.toggle('revealed');
});


const doubleClickCard = document.querySelector('[data-secret="double-click"]');
doubleClickCard.addEventListener('dbclick', function()
// 4. Add an event listener to enlarge the text on double click.
//  - The selector is doubleClickCard
//  - The event type is dblclick
{
    doubleClickCard.classList.toggle('revealed');
});

const document = document.querySelector('[data-secret="shake"]');
document.addEventListener('keydown', function()
// 5. Add an event listener to shake the card on any keypress.
//  - The selector is document
//  - The event type is keydown
{
    keypressCard.classList.add('revealed');
    keypressCard.style.animation = "shake 0.5s";
});



// 6. Add an event listener to stop the shaking.
//  - The selector is document
document.addEventListener('keyup', function(){
    keypressCard.classList.remove('revealed');
    keypressCard.style.animation = "";
});

