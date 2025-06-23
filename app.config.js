const appJson = require('./app.json')

export default {
    expo:{
        ...appJson.expo,
        extra: {
            TMDB_API_KEY: process.env.TMDB_API_KEY,
            TMDB_ACCESS_TOKEN: process.env.TMDB_ACCESS_TOKEN
        }
    }
};