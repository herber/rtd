# rtd

> Simple isomorphic router

## Install

```
$ npm install rtd
```

## Usage

```js
const rtd = require('rtd');

const router = rtd(() => {
  console.log('not found');
});

router.on('/', () => {
  console.log('index');
});

router.on('/wildcard/*', () => {
  console.log('wildcard');
});

router.on('/:user', (params) => {
  console.log('user: ' + params.user);
});

router('/');
// => index

router('/wildcard/match');
// => wildcard

router('/me');
// => user: me

router('/404');
// => not found
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)
