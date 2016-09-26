import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import $ from 'jquery';

class CommentList extends React.Component {
  render() {
    return (
        <div className="commentList">
          I am a List of the Comments.
          {this.props.data.map(comment => <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>)}
        </div>
    )
  }
}

class CommentForm extends React.Component {
  render() {
    return (
        <div className="commentForm">
          <h2>
            I am a comment form.
          </h2>
        </div>
    )
  }
}

class Comment extends React.Component {
  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    var md = new Remarkable();
    return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
    )
  }
}

export default class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
        <div>
          <h1>Hello! I am a comment box.</h1>
          <CommentList data={this.state.data} />
          <CommentForm />
        </div>
      );
  }
}
