var User = React.createClass({
  propTypes: {
    username: React.PropTypes.string,
    id: React.PropTypes.number
  },

  render: function() {
    return (
      <div className = "row">
        <a href = {'/users/' + this.props.id}>
        <div className='btn btn-warning'> {this.props.username} </div>
        </a>
        <hr/>
      </div>
    );
  }
});
