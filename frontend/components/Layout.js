import HeaderMeta from "./HeaderMeta";
import Footer from "./Footer";
import NProgress from "next-nprogress/component";

const layoutStyle = {
    margin: 0,
    padding: 0
};

const Layout = props => (
    <div style={layoutStyle}>
        <NProgress />
        <HeaderMeta />
        {props.children}
        <Footer />
    </div>
);

export default Layout;
