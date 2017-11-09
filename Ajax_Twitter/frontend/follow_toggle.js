const APIUtil = require('./api_util');

class FollowToggle{
  constructor($el){

    this.userId = $el.data("userid");
    this.followState = $el.data("followed");
    this.el = $el;
    this.render();
    this.el.on("click", this.handleClick.bind(this));
  }

  render(){
    $(this.el[0]).prop('disabled', "false");
    console.log(this.el);
    debugger;
    if(this.followState===true){
      this.el.html("<button>Unfollow!</button>");
    }else{
      this.el.html("<button>Follow!</button>");
    }
  }

  handleClick(event){
    event.preventDefault();
    $(this.el[0]).prop('disabled', "true");
    console.log(event);
    const context = this;
    if(this.followState===true){
      APIUtil.unfollowUser(this.userId).then(() => {
        context.followState = false;
        context.render();
      }, () => {console.log('Error');});
    }else{
      APIUtil.followUser(this.userId).then(() =>{
        context.followState = true;
        context.render();
      }, () => {console.log('Error');});
    }
  }


}

module.exports = FollowToggle;
