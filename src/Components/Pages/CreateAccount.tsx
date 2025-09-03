"use client";
import React, { ChangeEvent, useState } from "react";
import US_flag from "../Assets/Images/united-states-flag-icon.png";
import Image from "next/image";
import Google from "../Assets/Images/Google.svg";

interface CreateAccountProps {
  scrollHeight?: number;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}
const CreateAccount: React.FC<CreateAccountProps> = ({
  scrollHeight,
  scrollRef,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string>("+1");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value;

    if (!value.startsWith("+1")) {
      value = "+1";
    }

    const digits = value
      .slice(2)
      .replace(/[^0-9]/g, "")
      .slice(0, 10);

    let formattedValue = "+1";
    if (digits.length > 0) {
      formattedValue += ` (${digits.slice(0, 3)}`;
      if (digits.length > 3) {
        formattedValue += `) ${digits.slice(3, 6)}`;
      }
      if (digits.length > 6) {
        formattedValue += `-${digits.slice(6, 10)}`;
      }
    }

    if (digits.length > 0 && digits.length < 10) {
      setError("US number must be 10 digits");
    } else {
      setError(null);
    }

    setPhone(formattedValue);
  };

  const handleContinue = () => {
    if (!email.includes("@")) {
      setEmailError("Email must contain '@'");
      return;
    }

    setEmailError("");

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("+1");
    setPassword("");
    setPasswordAgain("");
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="w-full flex flex-col gap-[16px] mt-[12px] pr-[4px] overflow-y-auto"
        style={{ maxHeight: scrollHeight }}
      >
        <div className="flex gap-[16px] ">
          <div className="flex flex-col">
            <h2 className="pb-[8px] text-[14px] font-sans font-[600]">
              First Name
            </h2>
            <div className="flex items-center h-[40px] py-[4px] px-[11px] border border-[#e5e8eb] rounded-[6px]">
              <input
                type="text"
                placeholder="Olivia"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="off"
                className="w-full h-full text-[14px] text-ellipsis outline-none placeholder:text-[#cbd1d7]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="pb-[8px] text-[14px] font-sans font-[600]">
              Last Name
            </h2>
            <div className="flex items-center h-[40px] py-[4px] px-[11px] border border-[#e5e8eb] rounded-[6px]">
              <input
                type="text"
                placeholder="Rodrigo"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="off"
                className="w-full h-full text-[14px] text-ellipsis outline-none placeholder:text-[#cbd1d7]"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="pb-[8px]">
            <label className="text-[14px] font-[600]">Email</label>
          </div>
          <div className="flex items-center  pl-[11px] pr-[40px] border border-[#e5e8eb] rounded-[6px] h-[40px]">
            <input
              type="email"
              placeholder="olivia@befer.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              className="text-[14px] placeholder:text-[#cbd1d7] text-ellipsis outline-none w-full"
            />
          </div>
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        <div>
          <div className="pb-[8px]">
            <label className=" text-[14px] font-[700] font-sans text-[#333333]">
              Phone Number
            </label>
          </div>

          <div className="flex gap-4 border border-[#e5e8eb] h-[40px] rounded-[6px]">
            <div className="flex items-center justify-center px-[8px] border-r border-[#e5e8eb]">
              <Image
                src={US_flag}
                alt="US flag"
                className="w-[18px] h-[14px]"
              />
            </div>
            <input
              type="text"
              placeholder="+1"
              value={phone}
              onChange={handlePhoneChange}
              autoComplete="off"
              className="outline-none w-full rounded px-2 py-1"
              maxLength={17}
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <div>
          <div className="pb-[8px]">
            <label className="text-[14px] font-[600]">Password</label>
          </div>

          <div className="py-[4px] px-[11px] flex gap-2 items-center justify-between border border-[#e5e8eb] rounded-[6px] h-[40px]">
            <input
              placeholder="Enter Your password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-[14px] text-ellipsis outline-none w-full placeholder:text-[#cbd1d7]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer text-gray-500"
            >
              {showPassword ? (
                //  Eye-off SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye-off"
                >
                  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
                  <path d="m2 2 20 20"></path>
                </svg>
              ) : (
                //  Eye SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div>
          <div className="pb-[8px]">
            <label className="text-[14px] font-[600]">Confirm Password</label>
          </div>

          <div className="py-[4px] px-[11px] flex gap-2 items-center justify-between border border-[#e5e8eb] rounded-[6px] h-[40px]">
            <input
              placeholder="Enter Your password again"
              type={showPasswordAgain ? "text" : "password"}
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
              className="text-[14px] text-ellipsis outline-none w-full placeholder:text-[#cbd1d7]"
            />

            <button
              type="button"
              onClick={() => setShowPasswordAgain(!showPasswordAgain)}
              className="cursor-pointer text-gray-500"
            >
              {showPasswordAgain ? (
                //  Eye-off SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye-off"
                >
                  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
                  <path d="m2 2 20 20"></path>
                </svg>
              ) : (
                //  Eye SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] mt-[24px]">
          <button
            onClick={handleContinue}
            className="w-full p-[8px] text-[14px] font-[600] font-sans bg-[#0058ff] text-white hover:bg-white hover:text-[#0058ff] transition-colors rounded-[99px] cursor-pointer border border-[#0058ff]"
          >
            Continue
          </button>
          <div className="flex items-center ">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="mx-4 text-black font-medium text-[12px] font-sans">
              OR
            </span>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>

          <button className="w-full p-[8px] text-[16px] font-[600] font-sans rounded-[99px] flex items-center justify-center gap-2 border  border-[#ccc] hover:border-[#0058FF] hover:text-[#0058FF] cursor-pointer">
            <Image
              src={Google}
              alt="Google-icon"
              className="h-[24px] w-[24px]"
            />
            Continue with Google
          </button>

          <p className="text-[12px] text-[#74808B] mt-4 mb-12 text-center">
            By logging in, you are agreeing to our{" "}
            <span className="underline">Terms & Conditions.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
