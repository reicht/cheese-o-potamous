var Cheese = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.number
  },

  handleSubmit: function () {
      $.ajax({
        method: "POST",
        url: '/favs/create',
        data: {
          fav: {
            cheese_id: this.props.id
          }
        }
      });
  },

  render: function() {
    return (
      <div className = "row">
        <div>Cheese: {this.props.name}</div>
        <div className='btn btn-primary' onClick={this.handleSubmit}>Love Dis Cheeze</div>
      </div>
    );
  }
});
