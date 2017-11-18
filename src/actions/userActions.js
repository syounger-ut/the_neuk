export const loginUser = (user) => {
  return {
    // Unique identifier
    type: "LOGIN_USER",
    // Payload
    user: user
  };
};
