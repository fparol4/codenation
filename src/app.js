require('dotenv').config()

/** Servies */
const { AxiosService } = require('./services')

const axiosInstance = new AxiosService('https://api.codenation.dev/v1/challenge/dev-ps/')

const getGeneratedData = ({ request }) => {
    return request.get('generate-data', {
        params: {
            token: process.env.CODENATION_TOKEN
        }
    })
}

(async () => {
    const generatedDataRequest = await getGeneratedData(axiosInstance)
    const { data: generatedData } = generatedDataRequest
})()