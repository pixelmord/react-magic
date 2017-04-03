import React, { Component } from 'react';

class SectionPage extends Component {
  render() {

    return (
      <div className="page page--section">
        Section {this.props.match.params.id}
      </div>
    );
  }
}

export default SectionPage;
