var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    
    multiply: function() {
        this.setState({
            counter: this.state.counter * 2
        });
    },
    
    render: function() {
return (React.createElement('div', {className: 'main'},
React.createElement('li', {onClick: this.increment}, 
React.createElement('button', {}, 'Licznik dodatni: ' + this.state.counter)),
React.createElement('li', {onClick: this.decrement}, 
React.createElement('button', {}, 'Licznik ujemny: ' + this.state.counter)),
React.createElement('li', {onClick: this.multiply}, 
React.createElement('button', {}, 'Licznik mnożenia: ' + this.state.counter)),
)

)}    
});  
    

var elements = React.createClass({
    render: function () {
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Liczniki: '),
                React.createElement(Counter),

            )
        )
    }
});

var element = React.createElement(elements);
ReactDOM.render(element, document.getElementById('app'));


