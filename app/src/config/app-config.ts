export interface AppConfig {
    server: {
        host: string;
        port: number;
    }
    jwt: {
        secret: string;
        audiance: string;
        expiresIn: string;
    },
    mongoDb: {
        server: string;
        database: string;
    }
}