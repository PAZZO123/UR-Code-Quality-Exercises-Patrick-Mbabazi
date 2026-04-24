const greet = (name = "") => {
  const clean = name.trim();
  return clean ? `Hello, ${clean}!` : "Hello!";
};