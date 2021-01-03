import Navigation from '../Navigation';

const Layout = ({children}) => (
    <div className="layout">
        <header>
           <Navigation />
        </header>
        <main>
            {children}
        </main>
        <footer>

        </footer>
    </div>
);

export default Layout;