# get-auth-token-from-npmrc 

> Convenience module and CLI for extracting the auth token from your ~/.npmrc file

Hey! If you know of a better way to do this, please let me know.

## Programmatic Usage

Install it locally:

```sh
npm i get-auth-token-from-npmrc --save
```

Then in your JS file:

```js
const token = require('get-auth-token-from-npmrc')()
// xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

If `~/.npmrc` exists and you're logged in to npm, a token is returned.

Otherwise, `null` is returned.

## CLI Usage

Install it globally (or locally depending on your use-case):

```sh
npm i -g get-auth-token-from-npmrc && get-auth-token-from-npmrc
```

The token is written to stdout.

## Dependencies

None

## Dev Dependencies

None

## License

MIT
