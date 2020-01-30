class MissingParamError extends Error {
    constructor(message) {
        super(message)
        this.status = 500
        this.name = 'MissingParamError'
    }
}

module.exports = MissingParamError