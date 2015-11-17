'use strict';

var React = require('react');

var boxStyle = {
  height: '100px',
  width: '100px'
  };


var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
   'getInitialState': function onGetInitialState() {
    // naming it initialX clearly indicates that the only purpose
    // of the passed down prop is to initialize something internally
    return {'value': this.props.initialValue};
  },
  'render': function onRender () {
    return (
      <button style={boxStyle} onclick="" >{this.state.value}</button>
      'value' : this.props.initialValue
    );
  },

  componentWillMount: function(){
       var t = this;
       this.timer = setInterval(function(){

       var v = t.state.value;
       var newValue = v === 'X' ? 'O': 'X';
       t.setState({
       value: newValue
       });
       }, 300);
       },
});

React.render(<Box initialValue={'X'}/>, document.body);
