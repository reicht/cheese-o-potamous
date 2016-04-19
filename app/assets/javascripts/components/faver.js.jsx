var Faver = React.createClass({

  handleSubmit: function () {
      $.ajax({
        method: "POST",
        url: '/favs/create',
        data: {
          fav: {
            user_id: 1,
            cheese_id: 1
          }
        }
      })
  },

    render: function() {
        return (
          <div>
              <div className='btn btn-primary' onClick={this.handleSubmit}>Love Dis Cheeze</div>
          </div>
        );
   }
});
