import { ClientNavbar } from './client.navbar';
import { Outlet } from 'react-router-dom';
import Banner from './client.banner';
import Footer from './client.footer';
export const ClientLayout = (props) => {
  return (
    <div>
      <ClientNavbar />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};
