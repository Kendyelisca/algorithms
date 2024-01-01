countDown = (i) => {
  console.log(i);
  if (i <= 0) {
    return;
  }
  countDown(i - 1);
};

countDown(50);
