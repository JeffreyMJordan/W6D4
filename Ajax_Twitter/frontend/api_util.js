const APIUtil = {
  followUser: (id) => {
    return $.ajax({
      type: 'post',
      dataType: 'json',
      url: `/users/${id}/follow`,
    });
  },

  unfollowUser: (id) => {
    return $.ajax({
      type: 'delete',
      dataType: 'json',
      url: `/users/${id}/follow`,
    });
  }
};

module.exports = APIUtil;
