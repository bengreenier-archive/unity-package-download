const assert = require('assert')
const UnityAuthenticationClient = require('unity-package-authentication').UnityAuthenticationClient
const UnityDownloadClient = require('../').UnityDownloadClient

const testCreds = require('unity-package-authentication/test/constants')

describe('UnityDownloadClient', () => {
    it('should construct', () => {
        new UnityDownloadClient('')
        new UnityDownloadClient('', '')
        new UnityDownloadClient('', '', '')
    })

    it('should reformat apiRoot if needed', () => {
        const client = new UnityDownloadClient('', '', 'pie/')

        assert.equal(client.apiRoot, 'pie')
    })

    it('should download meta', (done) => {
        new UnityAuthenticationClient()
            // see https://github.com/bengreenier/unity-package-authentication/blob/master/test/basic.js#L22
            .authenticate(testCreds.testUsername, testCreds.testPassword)
            .then((sessionId) => {
                return new UnityDownloadClient(sessionId)
            }).then((client) => {
                // this only works so long as this package exists
                // see https://www.assetstore.unity3d.com/en/#!/content/32351
                return client.downloadMeta('32351')
            }).then((meta) => {
                assert.ok(typeof meta.download.url != 'undefined')
                done()
            }, done)
    }).timeout(5000)

    it('should download content', (done) => {
        new UnityAuthenticationClient()
            // see https://github.com/bengreenier/unity-package-authentication/blob/master/test/basic.js#L22
            .authenticate(testCreds.testUsername, testCreds.testPassword)
            .then((sessionId) => {
                return new UnityDownloadClient(sessionId)
            }).then((client) => {
                // this only works so long as this package exists
                // see https://www.assetstore.unity3d.com/en/#!/content/32351
                return client.download('32351')
            }).then((bundle) => {
                assert.ok(typeof bundle != 'undefined')
                assert.ok(typeof bundle.meta.download.url != 'undefined')
                assert.ok(typeof bundle.package != 'undefined')
                done()
            }, done)
    }).timeout(30 * 1000)
})