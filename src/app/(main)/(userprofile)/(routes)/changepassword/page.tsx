"use client";

import React, { useMemo, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Eye, EyeOff } from "lucide-react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState<string>("");

  const requirements = useMemo(() => {
    const hasMinLen = newPassword.length >= 8;
    const hasUpper = /[A-Z]/.test(newPassword);
    const hasLower = /[a-z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const hasSymbol = /[^A-Za-z0-9]/.test(newPassword);
    const matches = newPassword.length > 0 && newPassword === confirmPassword;

    return { hasMinLen, hasUpper, hasLower, hasNumber, hasSymbol, matches };
  }, [newPassword, confirmPassword]);

  const validate = () => {
    if (!currentPassword) return "Please enter your current password.";
    if (!requirements.hasMinLen) return "New password must be at least 8 characters.";
    if (!requirements.hasUpper) return "New password must include an uppercase letter.";
    if (!requirements.hasLower) return "New password must include a lowercase letter.";
    if (!requirements.hasNumber) return "New password must include a number.";
    if (!requirements.hasSymbol) return "New password must include a symbol.";
    if (!requirements.matches) return "Confirm password does not match.";
    if (currentPassword === newPassword) return "New password must be different from current password.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setMessage("");

    const error = validate();
    if (error) {
      setStatus("error");
      setMessage(error);
      return;
    }

    try {
      setStatus("submitting");
      setMessage("");

      // Adjust endpoint to your API route if different:
      const res = await fetch("/api/account/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // If you use auth cookies, they’ll be sent automatically; add credentials if needed:
        // credentials: "include",
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const serverMsg = data?.message || "Failed to change password.";
        throw new Error(serverMsg);
      }

      setStatus("success");
      setMessage("Password changed successfully.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong. Please try again.");
    }
  };

  const RequirementItem = ({
    met,
    text,
  }: {
    met: boolean;
    text: string;
  }) => (
    <div className={`flex items-center gap-2 text-xs ${met ? "text-green-600" : "text-gray-500"}`}>
      <div className={`w-2 h-2 rounded-full ${met ? "bg-green-500" : "bg-gray-300"}`} />
      <span>{text}</span>
    </div>
  );

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <div className="w-full md:max-w-7xl mx-auto">
        <div className="rounded-2xl p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <button className="text-black text-sm font-medium flex items-center gap-1.5 cursor-pointer md:hidden mb-6">
            <IoIosArrowBack />
            <span className="font-semibold">Change Password</span>
          </button>

          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 hidden md:block">Change Password</h1>
          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Current Password */}
            <div>
              <label htmlFor="currentPassword" className="block text-sm sm:text-lg font-bold sm:font-medium text-black mb-1 sm:mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type={showCurrent ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full text-black px-4 py-3 pr-12 border-[0.5px] bg-transparent border-[#E0E0E0] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-[#161616] sm:placeholder-[#797979]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-sm sm:text-lg font-bold sm:font-medium text-black mb-1 sm:mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  id="newPassword"
                  name="newPassword"
                  type={showNew ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full text-black px-4 py-3 pr-12 border-[0.5px] bg-transparent border-[#E0E0E0] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-[#161616] sm:placeholder-[#797979]"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Password Requirements */}
              {newPassword && (
                <div className="mt-3 space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <RequirementItem met={requirements.hasMinLen} text="At least 8 characters" />
                    <RequirementItem met={requirements.hasUpper} text="Uppercase letter" />
                    <RequirementItem met={requirements.hasLower} text="Lowercase letter" />
                    <RequirementItem met={requirements.hasNumber} text="Contains a number" />
                    <RequirementItem met={requirements.hasSymbol} text="Contains a symbol" />
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm sm:text-lg font-bold sm:font-medium text-black mb-1 sm:mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full text-black px-4 py-3 pr-12 border-[0.5px] bg-transparent border-[#E0E0E0] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-[#161616] sm:placeholder-[#797979]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {confirmPassword && (
                <p className={`mt-2 text-xs ${requirements.matches ? "text-green-600" : "text-red-600"}`}>
                  {requirements.matches ? "Passwords match" : "Passwords do not match"}
                </p>
              )}
            </div>

            {/* Status Messages */}
            {status !== "idle" && message && (
              <div
                className={`text-sm rounded-lg px-4 py-3 ${status === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : status === "error"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-blue-50 text-blue-700 border border-blue-200"
                  }`}
                role="status"
                aria-live="polite"
              >
                {message}
              </div>
            )}

            {/* Save Button */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="blue-Btn text-white px-12 py-2 rounded-lg font-medium transition-transform duration-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "submitting" ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;