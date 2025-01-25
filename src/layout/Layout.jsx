import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <Loader />
      <main className="main">
        <div className="container gutter-top">
          {/* Header */}
          <Header />
          <div className="row sticky-parent">
            {/* Sidebar */}
            <Sidebar />
            {/* Content */}
            <div className="col-12 col-md-12 col-lg-10">
              <div className="box box-content" id="content">
                <div className="content">
                  <Outlet />
                </div>
              </div>
              {/* Footer */}
              <footer className="footer">© 2025 Praveen Vasanthan</footer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
