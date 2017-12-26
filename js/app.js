//Javascript Document

// Separate out your view and your data, they should never interact
// The controller allows the two separations to interact

// where all the data is stored. will not directly interact with the view.
let data = {
  lastID : 0,
  catList: []
};

// interacts directly with the modal and the view
let controller = {

  addCat: function(name, img) {
    let thisID = data.lastID;

    // add new object to the catList array
    data.catList.push({
      name : name,
      clicks : 0,
      img : img,
      id : thisID
    });

    // increment lastID, stored in data
    ++data.lastID;
  },

  addClick: function(id) {
    ++data.catList[id].clicks;

  },

  click : function() {
    const catImage = $('.catImage');

  //event listener for click on catImage
    $('.catImage').on('click', function(e) {

      let clickId = $(this).attr('data-id');
      console.log(data.catList[clickId].clicks);

      //use clickId to gather data (this is in the nav view)
      let name = data.catList[clickId].name;
      let imageSrc = data.catList[clickId].img;
      let clickNum = data.catList[clickId].clicks;

      view.catDisplay(name, img, clicks);


    });
  },

  init: function(id) {
    view.catDisplay(data.catList[0].name, data.catList[0].img, data.catList[0].clicks, data.catList[0].id);
    view.renderNav(data.catList);
    view.init();
  },

};


controller.addCat('Mr. Fantastic', 'images/meow.jpg');
controller.addCat('Elon', 'images/meow2.jpg');
controller.addCat('Mr. Regal', 'images/meow3.jpg');
controller.addCat('Mr. Fluffels', 'images/meow4.jpg');
controller.addCat('Countess', 'images/meow5.jpg');

let view = {

  // sets up event listner for click on cat Image
  init: function() {
    let catImage = $('.catImage');

    catImage.click(function(){
      console.log('clicked');

      let clickID = catImage.attr('data-id');

      controller.clickAdd(clickID);
    });

    let navItems = $('td');

    navItems.click(function(){
      let clickID = navItems.attr('data-id');

    });

  },

  // Renders the first cat image, clicks, etc
  catDisplay: function(name, img, clicks, id) {

    const clickDisplay = $('.click-display');
    const nameDisplay = $('.name');
    let catImage = $('.catImage');

    //display cat name, clicks and img; assign data-id
    $(nameDisplay).html('Name: '+name);
    $(clickDisplay).html('Clicks: '+clicks);
    $(catImage).attr('src', img).attr('data-id', id);

    
  },

  renderNav: function(catList) {
    let nav = $('.nav-table');

    $(catList).each(function(index) {
      $(nav).append('<tr><td data-id="'+catList[index].id+'">'+catList[index].name+'</td></tr>');
    });
  }

};

controller.init(0);





/*

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


*/
