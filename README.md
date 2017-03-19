# unity-package-download

> Note: uses es6 classes, see [this](http://node.green/#ES2015-functions-class) for node version compatibility

[![Build Status](https://travis-ci.org/bengreenier/unity-package-download.svg?branch=master)](https://travis-ci.org/bengreenier/unity-package-download)

Client for downloading packages from the unity package service

## How

Do I...

### Install

Simple! Just `npm install unity-package-download`

### Use

See the following (or the [tests](./test/basic.js):

```
const client = new UnityDownloadClient('sessionId')

client.download('packageId').then(...)
client.downloadMeta('packageId').then(...)
```

You'll probably also want to check out [unity-package-authentication](https://github.com/bengreenier/unity-package-authentication)
for securing a valid `sessionId`

## License

MIT