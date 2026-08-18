declare namespace NodeJS {
    interface ProcessEnv {
        BOT_TOKEN: string,
        BOT_CLIENT_ID: string,       
        YT_API_KEY: string,
        CALLBACK_URL: string,
        PORT: number
    }
}