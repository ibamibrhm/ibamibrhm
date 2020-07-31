const fetch = require('node-fetch');
const fs = require('fs');

(async () => {
  const res = await fetch('https://perlawanan.herokuapp.com/');
  const data = await res.json();

  const template = fs.readFileSync('TEMPLATE.md', 'utf-8');

  const newReadme = `${template}

    ${data.quote}

    - ${data.author}

Quote source: [API-perlawanan](https://github.com/ibamibrhm/api-perlawanan)

<div dir="rtl">
updated at: ${new Date().toLocaleDateString()}
</div>`

  fs.writeFileSync('../README.md', newReadme);
})()