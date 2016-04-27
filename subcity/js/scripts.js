var sticky;

/* Sticky Nav Bar */
$(window).scroll(function () {
	var top = $('#top'),
      navSticky = $('#top nav.sticky'),
      navStickyBanner = $('#top nav.sticky .banner'),
      bannerHeight = navStickyBanner.height(),
			topHeight = top.height(),
      activatePoint = topHeight,
			scroll = $(window).scrollTop();
	
  // show sticky nav if scrolled past nav
	if (scroll >= activatePoint && !sticky) {
    navSticky.show();
    setTimeout(function () {
      navSticky.toggleClass("show");
    }, 10);
    sticky = true;
	} else if (scroll < activatePoint && sticky) {
    navSticky.toggleClass("show");
    setTimeout(function () {
      navSticky.hide();
    }, 510);
    sticky = false;
	}
});

/* Sticky Nav Bar Drawer Drop Down */
$("#top nav.sticky .banner").click(function () {
  var selectDropDown = $("#top nav.sticky");
  var selectPointer = $("#stickymenupointer");
  var selectBanner = $("#top nav.sticky .banner");
  
  if (selectBanner.css("order") == "5")  {
    selectPointer.toggleClass("active");
    selectDropDown.toggleClass("active");
  }
});

/* House Info Selector */
$("#house > g").click(function () {
  var getId = $(this).attr("id"),
      card = $("#house-info #info-" + getId);
      houseContain = $("#house-container");
      welcome = $("#getting-started-welcome");
  
  // check if this part of house is not outside of rooms
  if (getId !== "building") {
    if (getId !== "walls") {
      // check if already selected
      if (card.css("display") !== "block") {
        welcome.hide("slow");
        
        // reset opacity for all parts of house and reset cards
        resetCards();
        
        // make transparent this part of house
        $(this).css("opacity", ".25");
        
        // display info about this part of house
        card.show("slow");
      } else {
        resetCards();
        welcome.show("slow");
      }
    }
  }
  
  function resetCards() {
    // reset cards
    for (var i = 1; i <= $("#house-info > article").length; i ++) {
        $("#house-info > article:nth-child(" + i + ")").hide("slow");
    }
    // reset opacity for all parts of house
    for (var i = 1; i <= $("#house > g").length; i ++) {
      $("#house > g:nth-child(" + i + ")").css("opacity", "");
    }
  }
});

/* House Parts Hover Animate */
$("#house > g").mouseover(function () {
  var getId = $(this).attr("id");
  
  // check if this part of house is not outside of rooms
  if (getId !== "building") {
    if (getId !== "walls") {
      $(this).css("opacity", ".5");
    }
  }
});

$("#house > g").mouseleave(function () {
  var getId = $(this).attr("id");
  
  if ($("#info-" + getId).css("display") !== "block") {
    $(this).css("opacity", "");
  }
});
