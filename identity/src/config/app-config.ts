export interface AppConfig {
    server: {
        host: string;
        port: number;
    }
    jwt: {
        secret: string;
        issuer: string;
        expiresIn: string;
    },
    mongoDb: {
        server: string;
        database: string;
    }
}