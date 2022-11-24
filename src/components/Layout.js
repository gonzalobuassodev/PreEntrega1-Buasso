import NavBar from './Navbar/Navbar';

export const Layout = ({ children }) => {
  return (
    <main className=''>
      <NavBar />
      {children}
    </main>
  );
};

export default Layout;
