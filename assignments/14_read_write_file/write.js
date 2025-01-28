const main = () => {
  const [path, message] = Deno.args;
  
  Deno.writeTextFileSync(path, message);
};

main();
