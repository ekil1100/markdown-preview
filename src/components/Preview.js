import React, { Component } from 'react'

class Preview extends Component {
  constructor(props) {
    super(props)
    this.creatPreview = this.creatPreview.bind(this)
  }

  creatPreview() {
    let renderer = new marked.Renderer()

    renderer.link = function(href, title, text) {
      return `<a target="_blank" href="${href}">${text}` + '</a>'
    }

    // renderer.heading = function(text, level) {
    //   var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')

    //   return `
    //           <h${level}>
    //             <a name="${escapedText}" class="anchor" href="#${escapedText}">
    //               <span class="header-link"></span>
    //             </a>
    //             ${text}
    //           </h${level}>`
    // }

    return { __html: marked(this.props.preview, { renderer: renderer }) }
  }

  render() {
    return (
      <div className="preview-render">
        <div id="preview" dangerouslySetInnerHTML={this.creatPreview()} />
      </div>
    )
  }
}

export default Preview
