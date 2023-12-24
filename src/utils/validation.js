export const loginValidation = (email, password) => {
  const validateEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
    email
  );

  const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );

  if (!validateEmail) return "Please enter a valid email address";
  else if (!isValidPassword) return "Please enter a valid password";
  
  return null;
};
