# unity-package-download

> Note: uses es6 classes, see [this](http://node.green/#ES2015-functions-class) for node version compatibility

[![Build Status](https://travis-ci.org/bengreenier/unity-package-download.svg?branch=master)](https://travis-ci.org/bengreenier/unity-package-download)

Client for downloading packages from the unity package service. 

__You must download one package manually before this will work, as you need to accept the unity TOS__.

It's important to note that __this is for downloading (not purchasing)__ packages -
as such, you can only get content you're already authorized to get.

To purchase yourself a package (not needed for free ones) go to [unity3d](https://www.assetstore.unity3d.com)
and click 'buy'.

## How

Do I...

### Install

Simple! Just `npm install unity-package-download`

### Use

See the following (or the [tests](./test/basic.js)):

```
const client = new UnityDownloadClient('sessionId')

client.download('packageId').then(...)
client.downloadMeta('packageId').then(...)
```

You'll probably also want to check out [unity-package-authentication](https://github.com/bengreenier/unity-package-authentication)
for securing a valid `sessionId`

## License

MIT
