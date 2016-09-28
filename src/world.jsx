import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './comment-box.jsx';

var data = [
  {id: 1, author: "Karl", text: "*First* comment"},
  {id: 2, author: "Hans", text: "_Second_ comment"},
]

class World extends React.Component {
  render() {
    return (
        <div className="World">
          <h1>World</h1>
          <CommentBox url="http://localhost:3000/api/comments" />
        </div>
      );
  }
}

ReactDOM.render(<World/>, document.getElementById('world'));
