const useVerifyHasSession = () => {
  const username_sinebahia = localStorage.getItem("username_sinebahia");
  const password_sinebahia = localStorage.getItem("password_sinebahia");

  if (!username_sinebahia || !password_sinebahia) {
    return false;
  }
  return true;
};

export { useVerifyHasSession };
