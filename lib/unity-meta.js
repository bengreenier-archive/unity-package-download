const request = require('request')

module.exports = class UnityMeta {
    constructor(metaObj) {
        const download = metaObj['download']

        this._categoryName = download['filename_safe_category_name']
        this._packageName = download['filename_safe_package_name']
        this._publisherName = download['filename_safe_publisher_name']
        this._id = download['id']
        this._key = download['key'] 
        this._linkId = download['link'].id 
        this._linkType = download['link'].type
        this._progress = download['progress'] 
        this._url = download['url'] 
    }

    get categoryName() {
        return this._categoryName
    }

    get packageName() {
        return this.packageName
    }

    get publisherName() {
        return this.publisherName
    }

    get id() {
        return this._id
    }

    get key() {
        return this._key
    }

    get linkId() {
        return this._linkId
    }

    get linkType() {
        return this.linkType
    }

    get progress() {
        return this._progress
    }

    get url() {
        return this._url
    }

    downloadAsset() {
        return request.get({
            url: this._url,
            encoding: null
        })
    }
}