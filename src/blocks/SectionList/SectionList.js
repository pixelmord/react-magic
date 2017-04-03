import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import CircularProgress from 'material-ui/CircularProgress';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class SectionListBlock extends Component {

  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      allSections: React.PropTypes.array,
    }).isRequired,
  }

  render() {
    const {
      loading,
      error,
      allSections
    } = this.props.data;

    if (loading) {
      return (
        <div>
          <CircularProgress size={80} thickness={7} />
        </div>
      )
    }

    if (error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }

    return (
      <div className="list list--section" style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          {allSections.map((section) => {
            const sectionUrl = `/section/${section.id}`;
            return (
              <GridTile
                key={section.id}
                title={section.name}
                containerElement={<Link to={sectionUrl} title={section.name} />}
              >
                <img src={section.imageUrl} alt={section.name} />
              </GridTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

const SectionQuery = gql`
  query {
  allSections {
    id
    name
    imageUrl
  }
}`;
const SectionList = graphql(SectionQuery)(SectionListBlock);

export default SectionList;
