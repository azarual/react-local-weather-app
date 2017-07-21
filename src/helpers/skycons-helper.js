function skyconify(name) {
  const skyconString = name.toUpperCase().replace(/-/g, "_");
  return skyconString;
}

export { skyconify };
