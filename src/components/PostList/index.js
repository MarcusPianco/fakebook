import React, { Component } from "react";
import PostFake from "../PostFake";
class PostList extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Post List</h1>
        <p style={{ marginLeft: 20 }}>
          {" "}
          <PostFake />
        </p>
      </>
    );
  }
}

export default PostList;
