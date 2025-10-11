const serverBaseUrl = `${import.meta.env.VITE_BASE_URL}`;

const handleResponse = async (response) => {
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Something went wrong!");
  }
  return result;
};

export const forgetPassword = async (data) => {
  try {
    const response = await fetch(`${serverBaseUrl}/auth/forget-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Forget password error:", error);
    throw error;
  }
};

export const verifyOtp = async (email, oneTimeCode) => {
  try {
    const response = await fetch(`${serverBaseUrl}/auth/verify-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, oneTimeCode }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("OTP verification error:", error);
    throw error;
  }
};

export const resetPassword = async (token, newPassword, confirmPassword) => {
  try {
    const response = await fetch(`${serverBaseUrl}/auth/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ newPassword, confirmPassword }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Reset password error:", error);
    throw error;
  }
};
