var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 10,
            add: 9,
            subtraction: 8
        };
    },

    increment: function() {
        this.setState({
            add: this.state.add + 1
        });
    },
    
    decrement: function() {
        this.setState({
            subtraction: this.state.subtraction - 1
        });
    },
    
    multiply: function() {
        this.setState({
            counter: this.state.counter * 2
        });
    },
    
    render: function() {
        return (React.createElement('ul', {className: 'main'},
            React.createElement('li',  {onClick: this.increment}, 
                React.createElement('button', {}, 'Licznik dodatni: ' + this.state.add)),
            React.createElement('li', {onClick: this.decrement}, 
                React.createElement('button', {}, 'Licznik ujemny: ' + this.state.subtraction)),
            React.createElement('li', {onClick: this.multiply}, 
                React.createElement('button', {}, 'Licznik mnożenia: ' + this.state.counter)),
      )
                
  )}  
    
});  
    
var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));


