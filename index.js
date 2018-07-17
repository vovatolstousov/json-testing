const request = require('request-promise-native');
const fs = require('fs');

(async function() {
  const posts = JSON.parse(await request('https://jsonplaceholder.typicode.com/posts'));
  if (!fs.existsSync('posts'))fs.mkdirSync('posts');
  posts.map((item)=>{
    fs.writeFile(`posts/${item.id}.json`, JSON.stringify(item, null, ' '), (err)=>{
      if(err) throw err;
    });
  });
}().catch(err => {
  console.log(err.message);
}));
