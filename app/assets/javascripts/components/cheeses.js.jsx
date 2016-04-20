var Cheeses = React.createClass({
  propTypes: {
    cheeses: React.PropTypes.array
  },

  render: function() {

    return (
      <ul>
        {this.props.cheeses.map(function(result, index) {
           return <Cheese name={result.name} id={result.id} key={index}/>;
        })}
      </ul>
    );
  }
});





//
// render: function() {
//   return (
//     <div>
//         Cheeses: {this.props.cheeses.forEach(function (cheese) {
//             return (<Cheese name={cheese.name} id={cheese.id} />)
//         })}
//     </div>
//   );
// }
