'use strict';

var active = document.querySelector('.tab-trigger.active'),
    triggers = document.querySelectorAll('.tab-trigger');

var tabPanel1 = document.getElementById('tab-one'),
    tabPanel2 = document.getElementById('tab-two');

// hide the inactive tab
tabPanel2.style.display = 'none';

$('#tabs a').click(function (clickEvent) {
  clickEvent.preventDefault();
  // grab the currently active tab panel
  var active = $('.tab-panel.active');
  var controlled = clickEvent.target.getAttribute('aria-controls');
  var tabPanel = document.getElementById(controlled);
  // remove the active classes
  $(clickEvent.target).siblings().removeClass('active'); // trigger
  $(active).removeClass('active'); // tab panel
  // add the active classes
  $(clickEvent.target).addClass('active'); // trigger
  $(tabPanel).addClass('active'); // tab panel

  $(active).hide();
  $(tabPanel).show();
});
