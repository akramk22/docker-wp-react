import react, { Component } from 'react';
import Layout from "../components/Layout.js";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";

class Index extends Component {
  render() {
    return(
      <Layout>
        <Menu menu={this.props.headerMenu} />
       <h3>This is the home page</h3>
      </Layout>
    )
  }
}





export default PageWrapper(Index);
