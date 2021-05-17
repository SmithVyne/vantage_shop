# Vantage Shop
This is the React frontend app for the Vantage Shop. Follow the instructions below to setup locally. This readme will serve for both this frontend codebase and the Rails backend [https://github.com/SmithVyne/vantage_shop_api](https://github.com/SmithVyne/vantage_shop_api)

Demo Videos
1. [Watch Demo Video 1: Overview](https://www.loom.com/share/e232debf50c6484ebcdb3f3bff445f80)
2. [Watch Demo Video 2: Error handling](https://www.loom.com/share/5b41026b556e407bacfdb54bb050d313)
3. [Conclusion](https://www.loom.com/share/eabbb537deda49c98e2a7fadb2460406)

## Technologies
  - React 🤝
  - Ruby - 2.7.2
  - Ruby on Rails 👌
  - ES6

## Installation
Follow the steps below to test the project locally. First ensure you have a version of [Node.js](http://nodejs.org/) equal or greater than v6.10.0 installed.

# Setting up Rails
1. Clone the repository from a terminal `https://github.com/SmithVyne/vantage_shop_api.git`.
2. Navigate to the project directory and open in your editor.
3. Install dependencies by running `bundle install`.
4. Create and migrate tables. Run `rails db:create` and `rails db:migrate`
5. Serve the application. Run `rails s -p 3002`

# Setting up React
1. Clone the repository from a terminal `https://github.com/SmithVyne/vantage_shop.git`.
2. Navigate to the project directory and open in your editor.
3. Install project dependencies by running `npm install`.
4. Run `npm start` to compile and serve the app on `http://localhost:3000` 
or any other port randomly available to React.

You can check out the API in node with this code:
```
const fs = require('async-file');
const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');

(async () => {
    const tsv = await fs.readFile("sampledata.tsv", { encoding: 'utf-8' })
    fetch('http://localhost:3002', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({tsv, uuid: uuidv4()})
    })
    .then(res => res.json())
    .then(data => console.log(JSON.stringify(data, null, 4)))
    .catch(e => console.log(e))
})()

```

👤 **Smith Nkereuwem**

- Github: [@SmithVyne](https://github.com/SmithVyne)
- Twitter: [@SmithVyne](https://twitter.com/SmithVyne)
- Email: [email me](mailto:smithnkereuwem2@gmail.com)

## Show your support

Give a ⭐️ if you like this project!
