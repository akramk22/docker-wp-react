import react, { Component } from 'react';
import Layout from "../components/Layout.js";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import Hero from '../components/Hero'

class Index extends Component {
  render() {
    return(
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <Hero/>
      </Layout>
    )
  }
}





export default PageWrapper(Index);
