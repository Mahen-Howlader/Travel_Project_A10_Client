import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import UseAuthHook from "../../ContexApi/UseAuthHook";

function Register() {
  const { createEmailAndPassword, updateProfileFun,logOutFun, googleLogin,facebookLogin} = UseAuthHook();
  //   console.log(createEmailAndPassword)
  const nivigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset 
  } = useForm();




  const onSubmit = (data) => {
    console.log(data)
    const { password, name, email, photoURL,password2 } = data;

    if (password.length < 6) {
        alert("Password must be at least 6 character");
        return;
      } else if (!/[a-z]/.test(password)) {
        alert("Must have a Lowercase letter in the password");
        return;
      } else if (!/[A-Z]/.test(password)) {
        alert("Must have a Uppercase letter in the password");
        return;
      }else if(password !== password2){
        alert("Password and confrim password not match")
        return
      }

    createEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user);
        logOutFun()
        updateProfileFun(name, photoURL).then(() => {
          alert("Wow Success");
          reset();
          nivigate("/login")
        })
       .catch(error => {
            alert(error.message)
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // socila account login 
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
        <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12 container mx-auto">
          <div className="relative py-3  sm:ml-0 sm:mx-auto md:w-[60%] lg:w-[50%]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-4 sm:-rotate-6 rounded-3xl"></div>
            <div className="relative px-4 py-10  bg-white shadow-lg rounded-3xl sm:p-20">
              <div className=" mx-auto">
                <div>
                  <h1 className="text-4xl text-center font-bold ">Register</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="py-8 text-base leading-6 space-y-10 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        <input
                          {...register("name", { required: true })}
                          id="name"
                          name="name"
                          type="text"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                          placeholder="Your Name"
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Your Name
                        </label>
                        {errors.name && (
                          <span className="text-sm text-red-600">
                            This field is required
                          </span>
                        )}
                      </div>
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
                          id="photo"
                          name="photo"
                          type="text"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                          placeholder="Photo URL"
                          {...register("photoURL")}
                        />
                        <label
                          htmlFor="photo"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Photo URL
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          id="password"
                          {...register("password", { required: true })}
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
                      <div className="relative">
                        <input
                          id="password2"
                          {...register("password2", { required: true })}
                          name="password2"
                          type="password"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                          placeholder="Password2"
                        />
                        <label
                          htmlFor="password2"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Confrim Password
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
                  Have already an account?{" "}
                  <Link
                    to="/login"
                    className="text-xl font-semibold text-blue-700 border-b-2 border-blue-700"
                  >
                    Login here
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
