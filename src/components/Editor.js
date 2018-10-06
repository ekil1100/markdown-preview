import React, { Component } from 'react'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.autoSize = this.autoSize.bind(this)
  }

  handleChange(e) {
    this.props.onChange(e)
    this.autoSize(e)
  }

  autoSize(e) {
    let $editor = e.target
    console.log($editor)
    console.log('scroll height' + $editor.scrollHeight)
    $editor.style.height = 'auto'
    $editor.style.height = $editor.scrollHeight + 'px'
    console.log('height' + $editor.style.height)
  }

  render() {
    return (
      <div className="editor-render">
        <textarea
          id="editor"
          onChange={this.handleChange}
          defaultValue={this.props.placeHolder}
        />
      </div>
    )
  }
}

export default Editor
