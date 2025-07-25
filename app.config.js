const appJson = require('./app.json')

export default {
    expo:{
        ...appJson.expo,
        android: {
            package: "com.usama.moviemirror"
        },
        extra: {
            TMDB_API_KEY: process.env.TMDB_API_KEY,
            TMDB_ACCESS_TOKEN: process.env.TMDB_ACCESS_TOKEN,
            eas: {
                projectId: "1312a707-5278-48bb-bb73-1545b49c0abf"
            }
        },
        plugins: ["expo-font"]
    }
};