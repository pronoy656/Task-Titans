import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import AdminProfile from "./AdminProfile";


// import AdminProfile from "./AdminProfile";

const AdminHeader = ({toggleSidebar, isSidebarOpen}) => {
    return (
       <header className="w-[calc(100%-300px)]  left-[300px]  z-10 relative bg-white px-4 lg:px-8 py-4 shadow-sm ">
      <div className="absolute bottom-0 left-0 h-px  w-[calc(100%-300px)]" />

      <div className="grid grid-cols-3 items-center">
        {/*LEFT SECTION*/}
        <div className="flex items-center gap-2">
          {/* Sidebar toggle  */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-[#E66CE5] bg-white p-2 h-[44px] w-[44px] rounded-lg border-b-2 border-r-2 border-[#E66CE5]"
          >
            {isSidebarOpen ? (
              <MdClose size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </button>

          {/* Logo larger) */}
       
        </div>

        {/*CENTER SECTION*/}
        <div className="flex  justify-center ">
          {/* Logo  small screens*/}
         
         {/* <div className="absolute top-4 left-19">
           <Link  to={'/'} className="flex items-center gap-1 md:hidden">
            <img
              src="/logo_image.png"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <img
              src="/logo_name2.png"
              alt="Logo Name"
              className="h-6 sm:h-7 object-contain"
            />
          </Link>
          </div> */}

          
        
        </div>

        {/*RIGHT SECTION*/}
        <div className="flex justify-end items-center gap-2 sm:gap-3 lg:gap-4 min-w-fit">
        
          {/* Notifications Link */}
          <Link
            to="/notification"
            className="bg-white p-2 h-[40px] w-[40px] sm:h-[44px] sm:w-[44px] rounded-lg flex items-center justify-center"
          >
           
            <IoMdNotificationsOutline className="w-8 h-8"/>

          </Link>

          {/* Admin Profile */}
          {/* <AdminProfile /> */}
          <AdminProfile></AdminProfile>
        </div>
      </div>
    </header>
    );
};

export default AdminHeader;