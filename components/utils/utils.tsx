const Admin = {
  username: "nubul",
  password: "admin@123",
  data: {
    name: "nubul",
    age: "20",
    gender: "male",
    dob: "2000",
    address: "Guwahati",
  },
};
const Student = {
  username: "sakshi",
  password: "sakshi@123",
  data: {
    name: "sakshi",
    age: "20",
    gender: "male",
    dob: "2006",
    address: "UP",
  },
};
const Teacher = {
  username: "nubul",
  password: "admin@123",
};

export const Auth = async (data: any) => {
  if (data.name === Admin.username && data.pass === Admin.password) {
    return Admin.data;
  } else if (data.name === Student.username && data.pass === Student.password) {
    return Student.data;
  } else {
    return {};
  }
};
