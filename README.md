# Vue-Mailer
### This package has a powerful laravel back-end application for posting mail service. <h3 style="color: red;">We will never send you unsolicited 'junk' email, or share your data with anyone else who might.</h3>
#### Package developed by S.Katheeskumar
<img src="https://gitleaf.com/img/quote.png"/>
<hr/>

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

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## License

This project is licensed under the terms of the
[MIT license](https://gitleaf.com/).