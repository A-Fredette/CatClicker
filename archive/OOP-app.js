//Javascript Document

const clickDisplay = $('.click-display');
const nameDisplay = $('.name');
const catImage = $('cat-box img');

class Cat {
  constructor(name, img, id) {
    this.name = name;
    this.clicks = 0;
    this.img = img;
    this.id = id;
  }

  displayCat(){
    console.log('clicked!');
    $(nameDisplay).html('Name: '+this.name);
    $(clickDisplay).html('Clicks: '+this.clicks);
    $('.catImage').attr('src', this.img).attr('data-id', this.id);
  }

  clicked() {
    this.clicks ++;
    $(clickDisplay).html('Clicks: '+this.clicks);
  }
}

let fantastic = new Cat('Mr. Fantastic', 'images/meow.jpg', 0);
let elon = new Cat('Elon', 'images/meow2.jpg', 1);
let regal = new Cat('Mr. Regal', 'images/meow3.jpg', 2);
let fluffles = new Cat('Mr. Fluffels', 'images/meow4.jpg', 3);
let countess = new Cat('Countess', 'images/meow5.jpg', 4);

let catList = [
  fantastic,
  elon,
  regal,
  fluffles,
  countess
];

function writeNav(navList) {
  let nav = $('.nav-table');
  $(navList).each(function(index) {
    $(nav).append('<tr><td data-id="'+navList[index].id+'">'+navList[index].name+'</td></tr>');
  });
}

writeNav(catList);

$('td').click(function() {
  let clickId = $(this).attr('data-id');
  catList[clickId].displayCat();
});

$('.catImage').click(function() {
  let clickId = $(this).attr('data-id');
  catList[clickId].clicked();
});




