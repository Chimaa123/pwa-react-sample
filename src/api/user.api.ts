export const getData = () => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("George");
    }, 5000);
  });
};
