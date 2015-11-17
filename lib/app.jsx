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
   getInitialState: function() {
    // naming it initialX clearly indicates that the only purpose
    // of the passed down prop is to initialize something internally
    return {initialvalue: 'X'};
  },
  'render': function onRender () {
    return (
      <button style={boxStyle}>{this.state.initialvalue}</button>
    );
  }
});

React.render(<Box value='X'/>, document.body);
