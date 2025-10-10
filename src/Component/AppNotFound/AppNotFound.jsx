import errorPage from "../../assets/App-Error.png";

const AppNotFund = ({ children }) => {
  return (
    <>
      <div className="max-w-screen-xl flex flex-col items-center gap-4 justify-center mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1">
        <img src={errorPage} alt="" />
        <h1 className="text-5xl font-semibold text-[#001931]">
          OPPS!! APP NOT FOUND
        </h1>
        <p>
          The App you are requesting is not found on our system. please try
          another apps
        </p>

        {children}
      </div>
    </>
  );
};

export default AppNotFund;
