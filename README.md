# EcommBackEnd

## Description

Ecommerce Back End software utilizing Object-Relational Mapping (ORM) software Sequelize to interact with a MySQL database. The software will connect to and seed a MySQL database. Its functionallity of create, read, update, and delete (CRUD) will be demonstrated through the command line. The user will be prompted with a list of options to choose from. The user may view, add, update or delete categories, products, and tags stored in the database.

## Badge

![https://img.shields.io/badge/license-GPL-blue.svg](https://img.shields.io/badge/license-GPL-blue.svg)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Sources](#sources)

## Video

- [Video](https://drive.google.com/file/d/1xXd1xSFRpW99xx7TH5pY4e7KF43cLrbF/view)  
  Video of the application in use.

## Installation

clone the project, while in the project folder run 'npm install'. Then run 'npm start' to run the project. Rename the .env.EXAMPLE file to .env and update the database name, user, and password to your mysql password. The database will be created when you run 'npm run seed'.

## Usage

Using the command line, run 'npm run seed' to seed the databe, then 'npm start' to start the application. Use your prefered software to interact with the database. I used Insomnia Core to test the routes. The routes are as follows:

- /api/categories
- /api/products
- /api/tags

## License

[GPL](https://api.github.com/licenses/gpl-3.0)

## Contributing

Fork the project. Afterwards, create a feature branch with the changes. When ready, push that branch back to github.com

## Tests

There are no tests for this project.

## Questions

Github Username: xclusive36  
Github Profile: [Github Profile](https://github.com/xclusive36/)  
Any additional questions, please reach out to me by email:  
Email: [Email](mailto:xclusive36@gmail.com)

## Sources

- [mysql2](https://www.npmjs.com/package/mysql2)  
  Package used to interact with mysql in node.

- [dotenv](https://www.npmjs.com/package/dotenv)
  Package used to hide the mysql password.

- [sequelize](https://www.npmjs.com/package/sequelize)
  Package used to interact with mysql in node.

- [express](https://www.npmjs.com/package/express)
  Package used to create the server.