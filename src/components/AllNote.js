import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import EditComponent from './EditComponent';
class AllNote extends Component {
render() {
return (
<div>
  <h1 className="post_heading">All Notes</h1>
  {this.props.posts.map((post) => (
  <div key={post.id}>
    {post.editing ? <EditComponent post={post} key={post.id} /> : <Note post={post}
    key={post.id} />}
  </div>
))}
</div>
);
}
}

const mapStateToProps = (state) => {
return {
posts: state
}
}
export default connect(mapStateToProps)(AllNote);