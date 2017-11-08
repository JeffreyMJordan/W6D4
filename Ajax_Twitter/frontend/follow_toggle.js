const APIUtil = require('./api_utl');

class FollowToggle{
  constructor($el){

    this.userId = $el.data("userid");
    this.followState = $el.data("followed");
    this.el = $el;
    console.log(this.el);
    this.render();
    this.el.on("click", this.handleClick.bind(this));
  }

  render(){
    if(this.followState===true){
      this.el.html("<button>Unfollow!</button>");
    }else{
      this.el.html("<button>Follow!</button>");
    }
  }

  handleClick(event){
    event.preventDefault();
    console.log(event);
    const context = this;
    if(this.followState===true){
      $.ajax({
        type: 'delete',
        dataType: 'json',
        url: `/users/${this.userId}/follow`,
        success(data){
          context.followState = false;
          context.render();
        },
        error(){
          console.log("error");
        },
      });
    }else{
      $.ajax({
        type: 'post',
        dataType: 'json',
        url: `/users/${this.userId}/follow`,
        success(data){
          console.log(context);
          context.followState = true;
          context.render();
        },
        error(){
          console.log("error");
        },
      });
    }
  }


}

module.exports = FollowToggle;
