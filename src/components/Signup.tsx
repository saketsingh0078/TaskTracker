"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const router: any = useRouter();
  const session = useSession();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res: any = await signIn("credentials", {
      name: name,
      email: email,
      password: password,
      redirect: false,
    });

    if (res?.error) {
      console.log(res._message);
      setError(res.error);
    } else {
      console.log(res);
      router.push("/dashboard");
    }
  };

  if (session?.status == "authenticated") {
    router.push("/dashboard");
  }

  return (
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

        <form
          className="font-inter text-[20px] font-normal leading-normal mb-[32px] "
          onSubmit={handleSubmit}
        >
          <input
            className="w-[528px] h-[56px] rounded-[8px] p-[16px_12px] bg-[#EBEBEB] text-left text-[#606060] mb-[24px] focus:outline-none shadow-md"
            type="text"
            required
            placeholder="Full name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            className="w-[528px] h-[56px] rounded-[8px] p-[16px_12px] bg-[#EBEBEB] text-left text-[#606060] mb-[24px] focus:outline-none shadow-md"
            type="email"
            required
            placeholder="Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="flex items-center justify-between border border-gray-300 rounded-lg w-[528px] h-[56px] p-[16px_12px] bg-[#EBEBEB] mb-[24px] shadow-md">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="flex-grow outline-none bg-[#EBEBEB] text-left text-[#606060] "
            />
            <button
              type="button"
              className="p-2 focus:outline-none shadow-md"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VscEyeClosed /> : <VscEye />}
            </button>
          </div>
          <button
            className="w-[528px] p-[8px_8px] bg-[#4C38C2] text-white rounded-[8px] shadow-md"
            type="submit"
          >
            Sign Up
          </button>
          {error && <div className="text-red-500 mt-4">{error}</div>}
        </form>
        <h1 className="font-inter text-[20px] font-normal leading-normal text-[#606060] ">
          Already have an account?{" "}
          <span
            className="text-[#0054A1] cursor-pointer"
            onClick={() => router.push("/signin")}
          >
            Login
          </span>
        </h1>
      </div>
    </div>
  );
}
