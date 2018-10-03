import React, { Component } from 'react'

class Editor extends Component {
  render() {
    return (
      <textarea
        id="editor"
        onChange={this.props.onChange}
        defaultValue={this.props.placeHolder}
      />
    )
  }
}

export default Editor
