// import logo from "../../images/logo.svg";

// import "./Head.css";
import logo from "../../images/Logo.png";

export const Head = () => {
  return (
    <>
      <div className="head">
        <div className="head-inner p-[10px] flex gap-4 ">
          <div className="head-img">
            <img src={logo} alt="" className="w-[40px] h-[40px] mt-[60px]" />
          </div>
          <div className="head-text gap-3 flex flex-col mt-[50px]">
              <i className='bx bx-menu text-[120px] inline text-white sm:hidden absolute left-[1100px]'></i>
            <div className="link hidden sm:inline">
              <ul>
                <li className="text-zinc-500 text-2xl hover:w-[100px] font-bold hover:text-white cursor-pointer">
                  About <br /> Us
                </li>
                <li className="text-zinc-500 text-2xl hover:w-[100px] font-bold hover:text-white cursor-pointer">
                  Services
                </li>
                <li className="text-zinc-500 text-2xl hover:w-[100px] font-bold hover:text-white cursor-pointer">
                  Portfolio
                </li>
                <li className="text-zinc-500 text-2xl hover:w-[100px] font-bold hover:text-white cursor-pointer">
                  Clients
                </li>
                <li className="text-zinc-500 text-2xl hover:w-[100px] font-bold hover:text-white">
                  Contacts
                </li>
              </ul>
            <div className="til flex gap-3">
              <p className="text-zinc-500 text-2xl font-medium text-[20px] hover:text-white cursor-pointer hover:scale-125">
                EN
              </p>
              <p className="text-zinc-500 text-2xl font-medium text-[20px] hover:text-white cursor-pointer hover:scale-125">
                RU
              </p>
              <p className="text-zinc-500 text-2xl font-medium text-[20px] hover:text-white cursor-pointer hover:scale-125">
                UZ
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
