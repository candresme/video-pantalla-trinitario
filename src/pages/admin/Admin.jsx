import { Outlet } from 'react-router-dom';
import Menu from '../../components/admin/Sidebar';

const Admin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Menu />
        </div>
        <div className="col m-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
