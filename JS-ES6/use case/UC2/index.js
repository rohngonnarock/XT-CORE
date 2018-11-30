// Callback

const getUser = (res, rej) => {
  let mockUser = {
    name: "subh",
    password: "admin"
  };
  if (mockUser) {
    res(user);
  } else {
    rej({ err: "err : login details not matched" });
  }
};

const login = (user, res, rej) => {
  if (user.name === "sapient" && user.password === "sapient") {
    res(user);
  } else {
    rej({ err: "err : login details not matched" });
  }
};

const user = {
  name: "sapient",
  password: "sapient"
};

const dashboard = user => {};

const loginHandler = user => {
  console.log(user);
};

const successHandler = user => {
  login(user, loginHandler, errorHandler);
};

const errorHandler = err => {
  console.log(err.err);
};

getUser(successHandler, errorHandler);

//===============================================================================================================
// Promise

const loginUser = user => {
  return new Promise((resolve, reject) => {
    if (user.name === "sapient" && user.password === "sapient") {
      resolve(user);
    } else {
      reject({ err: "err : login details not matched" });
    }
  });
};

const getUser = user => {
  return new Promise((resolve, reject) => {
    let mockUser = {
      name: "subh",
      password: "admin"
    };
    if (mockUser) {
      resolve(user);
    } else {
      reject({ err: "err : login details not matched" });
    }
  });
};

getUser
  .then(result => {
    loginUser(result)
      .then(result => {
        console.log(result);
      })
      .catch(err => {});
  })
  .catch(err => {});

