/*
 \/ /  \/ /  \/ / / 
\  / /\  / /\  / / /
/  \/ /  \/ /  \ \ \
 /\  / /\  / /\ \ \ 
 \/ /  \ \/ / / /  \
\  / /\ \  / / / /\ 
/  \/ / /  \ \/ / / 
 /\  / / /\ \  / / /
/ /  \ \ \/ / / /  \
 / /\ \ \  / / / /\ 
*/  

const generatePattern = (height, width) => {
  const row1 = " \\/ / ";
  const row2 = "\\  / /";
  const row3 = "/  \\/ ";
  const row4 = " /\\  /";
  const pattern = [row1, row2, row3, row4].sort(() => 0.5 - Math.random());

  const rows = Array.from(
    { length: height },
    (_, i) => pattern[i % pattern.length]
  );

  return rows.map((e) => e.repeat(width)).join("\n");
};

console.log(generatePattern(30, 15));
