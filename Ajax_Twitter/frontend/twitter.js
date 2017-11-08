const FollowToggle = require('./follow_toggle');


$(() => {
    $('.follow-toggle').each(function(idx){
      let toggle = new FollowToggle($(this));
    });
  }
);
