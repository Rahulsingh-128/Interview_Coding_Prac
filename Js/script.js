// function rahul() {}

// class Fifth {}
// console.log(typeof Fifth);

const handleClick = () => {
  setTimeout(() => {
    new Promise((resolve) => {
      resolve("promise resolved");
    }).then((message) => console.log(message));
  }, 0);
};

window.handleClick = handleClick;
