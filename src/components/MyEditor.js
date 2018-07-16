import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
  }

  onBoldClick(e) {
    e.preventDefault()
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (<div>
      <button onMouseDown={e => this.onBoldClick(e)}>BOLD</button>
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
      />
    </div>);
  }
}
