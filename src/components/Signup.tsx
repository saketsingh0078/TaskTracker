"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  return (
    <>
      {" "}
      {true ? (
        <div className="w-screen h-screen [background:linear-gradient(180deg,#fff,#afa3ff)]  flex flex-row justify-center pt-[120px] leading-[normal] tracking-[normal] ">
          <div
            className={
              "w-[648px] h-fit [background:linear-gradient(180deg,#f7f7f7,#f0f0f0)] flex flex-col items-center justify-start rounded-[16px] p-[60px] text-center  "
            }
          >
            <h1 className=" text-4xl font-semibold font-barlow mb-[32px] ">
              Welcome to
              <span className="text-[#4534AC]"> Workflo</span>!
            </h1>

            <form className="font-inter text-[20px] font-normal leading-normal mb-[32px]">
              <input
                className="w-[528px] h-[56px] rounded-[8px] p-[16px_12px] bg-[#EBEBEB] text-left text-[#606060] mb-[24px] focus:outline-none"
                type="text"
                required
                placeholder="Full name"
              />

              <input
                className="w-[528px] h-[56px] rounded-[8px] p-[16px_12px] bg-[#EBEBEB] text-left text-[#606060] mb-[24px] focus:outline-none"
                type="email"
                required
                placeholder="Your Email"
              />
              <div className="flex items-center justify-between border border-gray-300 rounded-lg w-[528px] h-[56px] p-[16px_12px] bg-[#EBEBEB] mb-[24px]">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="flex-grow outline-none bg-[#EBEBEB] text-left text-[#606060]"
                />
                <button type="button" className="p-2 focus:outline-none">
                  {showPassword ? <VscEye /> : <VscEyeClosed />}
                </button>
              </div>
              <button className="w-[528px] p-[8px_8px] bg-[#4C38C2] text-white rounded-[8px]">
                Login
              </button>
            </form>
            <h1 className="font-inter text-[20px] font-normal leading-normal text-[#606060] ">
              Already have an account?{" "}
              <span className="text-[#0054A1]">Login</span>
            </h1>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center flex-col">
          <div className="flex justify-center">
            <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
              <div>
                <div className="px-10">
                  <div className="text-3xl font-extrabold">Sign up</div>
                </div>
                <div className="pt-2">
                  <LabelledInput
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    label="Email"
                    placeholder="harkirat@gmail.com"
                  />
                  <LabelledInput
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    label="Password"
                    type={"password"}
                    placeholder="123456"
                  />
                  <button
                    onClick={async () => {
                      const res = await signIn("credentials", {
                        email: email,
                        password: password,
                        redirect: false,
                      });
                      console.log(res);
                      router.push("/tasks");
                    }}
                    type="button"
                    className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
