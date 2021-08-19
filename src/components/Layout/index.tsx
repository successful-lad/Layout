// import Header from '../Header';
// import MyMenu from './MyMenu';
// import Alert from '../Alert';
// import Modal from '../Modal';

const Layout = ({ children }: any) => (
  <>
    {/* <Header /> */}
    <div style={{ display: 'flex', paddingTop: 48 }}>
      {/* <MyMenu /> */}
      <div
        style={{
          paddingLeft: 250,
          width: '100%',
          overflow: 'hidden',
          paddingRight: 24,
        }}
      >
        {children}
      </div>
      {/* <Alert /> */}
      {/* <Modal /> */}
    </div>
  </>
);

export default Layout;
