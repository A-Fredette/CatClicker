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
    $('.click-display').html('Clicks: '+data.catList[id].clicks);

  },

  init: function(id) {
    controller.displayCat(0);
    view.renderNav(data.catList);
    view.init();
  },

  displayCat: function(id) {
    const clickDisplay = $('.click-display');
    const nameDisplay = $('.name');
    let catImage = $('.catImage');

    //display cat name, clicks and img; assign data-id
    $(nameDisplay).html('Name: '+data.catList[id].name);
    $(clickDisplay).html('Clicks: '+data.catList[id].clicks);
    $(catImage).attr('src', data.catList[id].img).attr('data-id', id);
  },
};


let view = {

  // sets up event listner for click on cat Image
  init: function() {
    let catImage = $('.catImage');

    catImage.click(function(){
      let clickID = catImage.attr('data-id');
      controller.addClick(clickID);
    });

    // displauys navigation table
    let navItems = $('td');
    navItems.click(function(){
      let clickID = $(this).attr('data-id');
      controller.displayCat(clickID);
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

  controller.addCat('Mr. Fantastic', 'images/meow.jpg');
  controller.addCat('Elon', 'images/meow2.jpg');
  controller.addCat('Mr. Regal', 'images/meow3.jpg');
  controller.addCat('Mr. Fluffels', 'images/meow4.jpg');
  controller.addCat('Countess', 'images/meow5.jpg');

  controller.init(0);
