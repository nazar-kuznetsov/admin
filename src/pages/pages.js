import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Media from './media';
import News from './news';

class Pages extends Component {
  render() {
    const {url} = this.props.match;
    return (
      <>
        <Route path={`${url}`} component={Home} exact={true} />
        <Route path={`${url}/media`} component={Media} />
        <Route path={`${url}/news`} component={News} />
      </>
    );
  }
}

export default Pages;
