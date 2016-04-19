var Cheese = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Cheese: {this.props.name}</div>
      </div>
    );
  }
});
