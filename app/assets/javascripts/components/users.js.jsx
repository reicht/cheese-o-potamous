var Users = React.createClass({
  propTypes: {
    users: React.PropTypes.array
  },

  render: function() {
    return (
      <ul>
        {this.props.users.map(function(result, index) {
           return <User username={result.username} id={result.id} key={index}/>;
        })}
      </ul>
    );
  }
});
