import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import UseAuthHook from "../../ContexApi/UseAuthHook";

function Register() {
  const { signInEmailPassword,googleLogin,facebookLogin } = UseAuthHook();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email,password} = data;
    signInEmailPassword(email,password)
    .then((result) => {
      alert("Success Login")
      navigate("/")
    })
    .catch((error) =>{
      alert(error.message)
    })
  };


  function loginSocial (socialAccoutnLoginWithPopUP){
    socialAccoutnLoginWithPopUP()
    .then((result) => {
      alert("login succes")
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div className="w-full">
      <div className="bg-[url('https://i.ibb.co/G9RhPMf/login-Image3.jpg')] py-5 md:py-0 bg-cover bg-no-repeat w-full lg:min-h-screen ">
        <div className=" py-6 flex flex-col justify-center sm:py-12 container mx-auto">
          <div className="relative py-3  sm:ml-0 sm:mx-auto md:w-[60%] lg:w-[50%]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-4 sm:-rotate-6 rounded-3xl"></div>
            <div className="relative px-4 py-10  bg-white shadow-lg rounded-3xl sm:p-20">
              <div className=" mx-auto">
                <div>
                  <h1 className="text-4xl text-center font-bold ">Login</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="py-8 text-base leading-6 space-y-10 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        <input
                          {...register("email", { required: true })}
                          id="email"
                          name="email"
                          type="text"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                          placeholder="Email address"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Email Address
                        </label>
                        {errors.email && (
                          <span className="text-sm text-red-600">
                            This field is required
                          </span>
                        )}
                      </div>

                      <div className="relative">
                        <input
                          {...register("password", { required: true })}
                          id="password"
                          name="password"
                          type="password"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                          placeholder="Password"
                        />
                        <label
                          htmlFor="password"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Password
                        </label>
                        {errors.password && (
                          <span className="text-sm text-red-600">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="relative ">
                        <button
                          type="submit"
                          className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                        >
                          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                          <span className="relative ">SIGN UP</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex items-center gap-x-3 ">
                <p className="w-full bg-gray-500 h-[1px]"></p>
                <h1 className="font-bold">OR</h1>

                <p className="w-full bg-gray-500 h-[1px]"></p>
              </div>
              {/* social icon  */}
              <div className="flex gap-x-5 justify-center my-5">
                <FaGoogle onClick={() => loginSocial(googleLogin)} className="text-red-600 bg-gray-300 text-5xl py-2 px-3 rounded-lg cursor-pointer hover:bg-blue-300" />
                <FaFacebook onClick={() => loginSocial(facebookLogin)} className="text-indigo-600 bg-gray-300 text-5xl py-2 px-3 rounded-lg cursor-pointer hover:bg-blue-300" />
              </div>
              <div>
                <h1 className="text-center text-lg">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-xl font-semibold text-blue-700 border-b-2 border-blue-700"
                  >
                    Register here
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

// https://i.ibb.co/txjhPJX/login-Image2.jpg
// https://i.ibb.co/wsDR6zG/login-Image1.jpg
// https://i.ibb.co/G9RhPMf/login-Image3.jpg
