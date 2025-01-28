const main = () => {
  const path = Deno.args[0];
   
  const data = Deno.readTextFileSync(path);
  console.log(data);
};

main();
