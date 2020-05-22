# Vue-Mailer
### This package has a powerful laravel back-end application for posting mail service.
#### This package developed by S.Katheeskumar
[image](https://gitleaf.com/img/quote.png)
<hr>
## Installation

#### Install using npm
```bash
# install it via npm
npm install vue-mailer --save

OR

npm i vue-mailer
```

<hr>

#### [GitLeaf](https://gitleaf.com/) Officially uses `vue-mailer` for their mailing module.

## Usage

#### javascript

```javascript

var Mailer = require("vue-mailer");

var Data = 
{
    "to": "your-email@sample.com",
    "from":"no-replay@domain.com",
    "subject": "Sample Mail from vue-mailer",
    "title": "Sample Mail from vue-mailer",
    "body"  : "Hello there, I'm Katheeskumar. I love coding and proud to present this open source application"
}
//console.log(Data.name)
console.log(Mailer.prepare(Data)) // i'ts return json format

```

#### TypeScript

```typescript

import * as Mailer from 'vue-mailer';

var Data = 
{
    "to": "your-email@sample.com",
    "from":"no-replay@domain.com",
    "subject": "Sample Mail from vue-mailer",
    "title": "Sample Mail from vue-mailer",
    "body"  : "Hello there, I'm Katheeskumar. I love coding and proud to present this open source application"
}

Mailer.prepare(Data); // print and return json response. 


```

## License

This project is licensed under the terms of the
[MIT license](https://gitleaf.com/).