export const validName = (name) => {
  if (name.length > 5 && name.length < 50) {
    return true;
  } else {
    return false;
  }
}

export const validEmail = (email) => {
  if (email.length > 8 && email.length < 50 && email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

export const validSubject = (subject) => {
  if (subject.length > 8 && subject.length < 50) {
    return true;
  } else {
    return false;
  }
}