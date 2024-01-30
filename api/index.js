fetch(
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Craig%20Noone&format=json"
).then((res) => {
  res.parse().then((data) => {
    console.log(data);
  });
});
