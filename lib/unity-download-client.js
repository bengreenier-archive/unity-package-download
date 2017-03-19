const req = require('request-promise')

module.exports = class UnityDownloadClient
{
    constructor(sessionId, langId, apiRoot) {
        this._sessionId = sessionId
        this._langId = langId || 'en-US'
        this._apiRoot = apiRoot || 'https://kharma.unity3d.com'

        if (this._apiRoot.endsWith('/')) {
            this._apiRoot = this._apiRoot.substr(0, this._apiRoot.length - 1)
        }
    }

    downloadMeta(packageId) {
        return req.get({
            json: true,
            url: `${this.apiRoot}/api/${this.langId}/content/download/${packageId}.json`,
            headers: {
                'X-Requested-With': 'UnityAssetStore',
                'X-Unity-Session': this.sessionId
            }
        })
    }

    download(packageId) {
        return this.downloadMeta(packageId)
            .then((meta) => {
                return req.get({
                    encoding: null,
                    url: meta.download.url,
                    transform: (body) => {
                        return {
                            package: body,
                            meta: meta
                        }
                    }
                })
            })
    }

    get sessionId() {
        return this._sessionId
    }

    get langId() {
        return this._langId
    }

    get apiRoot() {
        return this._apiRoot
    }
}