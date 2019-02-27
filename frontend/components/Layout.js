import Header from "./Header";
import Footer from "./Footer";
import NProgress from "next-nprogress/component";
import styled from 'styled-components'

const LayoutStyle = styled.div`
    margin: 0;
    padding: 0;
`

const Layout = props => (
    <LayoutStyle>
          <NProgress color="#ADFC92" />
          <Header />
          {props.children}
          <Footer />
    </LayoutStyle>
);

export default Layout;
