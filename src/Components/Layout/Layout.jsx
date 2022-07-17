import styles from "./Layout.module.css"
import cn from 'classnames';
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";


const Layout = ({ children }) => {
    return (
        <div className={styles.wrapper}>
        <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}>
            </Sidebar>
            <body className={styles.body}>
                {children}
            </body>
        <Footer className={styles.footer}/>
        </div>
       
    );
};

export const withLoyout = (Component) => {
    return function withLoyoutComponent(props) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};