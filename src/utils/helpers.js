export const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return formatter.format(price);
};

export const validateForm = (setErrors, formData, formFields) => {
  let isValid = true;
  const formErrors = {};

  if (formFields.email) {
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      formErrors.email = "Invalid email format";
      isValid = false;
    }
  }

  if (formFields.password) {
    const hasSixCharacters = formData.password.length >= 6;
    const hasLowercaseLetter = /[a-z]/.test(formData.password);
    const hasUppercaseLetter = /[A-Z]/.test(formData.password);
    const hasDigit = /\d/.test(formData.password);
    const hasSpecialCharacter = /[!@#$%^&*()\-_=+~`[\]{}|:;"'<>,.?/]/.test(
      formData.password
    );
    if (!formData.password.trim()) {
      formErrors.password = "Password is required.";
      isValid = false;
    } else if (
      !hasSixCharacters ||
      !hasLowercaseLetter ||
      !hasUppercaseLetter ||
      !hasDigit ||
      !hasSpecialCharacter
    ) {
      let errorMessage = "Password must contain ";
      let missing = [];
      if (!hasSixCharacters) missing.push("at least 6 characters");
      if (!hasLowercaseLetter) missing.push("at least 1 lowercase letter");
      if (!hasUppercaseLetter) missing.push("at least 1 uppercase letter");
      if (!hasDigit) missing.push("at least 1 digit");
      if (!hasSpecialCharacter) missing.push("at least 1 special character");
      errorMessage += missing.join(", ") + ".";
      formErrors.password = errorMessage;
      isValid = false;
    } else if (formData.password.length > 128) {
      formErrors.password = "Password length cannot exceed 128 characters.";
      isValid = false;
    }
  }

  if (formFields.confirmPassword) {
    if (!formData.confirmPassword.trim()) {
      formErrors.confirmPassword = "Confirm password is required.";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }
  }

  if (formFields.name) {
    if (!formData.name.trim()) {
      formErrors.name = "Name is required.";
      isValid = false;
    } else if (formData.name.length < 3) {
      formErrors.name = "Name must be at least 3 characters long.";
      isValid = false;
    } else if (formData.name.length > 50) {
      formErrors.name = "Name length cannot exceed 50 characters.";
      isValid = false;
    }
  }

  if (formFields.contactNumber) {
    if (!formData.contactNumber.trim()) {
      formErrors.contactNumber = "Contact number is required.";
      isValid = false;
    } else if (!/^[6-9][0-9]{9}$/.test(formData.contactNumber)) {
      formErrors.contactNumber = "Invalid contact number.";
      isValid = false;
    }
  }

  if (formFields.address) {
    if (!formData.address.trim()) {
      formErrors.address = "Address is required.";
      isValid = false;
    } else if (formData.address.length < 10) {
      formErrors.address = "Address must be at least 10 characters long.";
      isValid = false;
    } else if (formData.address.length > 500) {
      formErrors.address = "Address length cannot exceed 500 characters.";
      isValid = false;
    }
  }

  setErrors(formErrors);
  return isValid;
};
