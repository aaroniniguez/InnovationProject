let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };

  let bound = user.sayHi.bind(user)
  
  setTimeout(user.sayHi, 1000); // Hello, undefined!
  