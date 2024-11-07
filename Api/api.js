const user = "https://jsonplaceholder.typicode.com/users";

fetch(user)
  .then(function (respons) {
    return respons.json();
  })
  .then(function (post) {
    post.forEach(function (item) {
      // console.log(item);

      console.log(item.address);
      console.log(item.company);
      console.log(item.email);
      console.log(item.id);
      console.log(item.name);
      console.log(item.phone);
      console.log(item.username);
      console.log(item.website);
    });
  });
