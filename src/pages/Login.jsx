import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  return (
    <section className="h-full min-h-[360px] mx-10 my-10 lg:my-20 xl:my-20 lg:mx-40 xl:mx-40 text-[#444B55] dark:text-[#ffffff] text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-[#ffffff] mb-12">
        Silahkan login terlebih dahulu
      </h1>
      <button
        className="w-fit py-1 px-2 rounded border mt-2 border-[#009EA9] text-[#009EA9] hover:text-white hover:bg-[#009EA9]"
        onClick={handleLogin}
      >
        Login Sekarang!
      </button>
    </section>
  );
};

export default Login;
