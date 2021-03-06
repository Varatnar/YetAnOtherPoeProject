import Joi from '@hapi/joi';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const configSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid('development', 'ci', 'staging', 'production')
        .default('production'),
    PORT: Joi.number()
        .port()
        .default(3000),
    GLOBAL_PREFIX: Joi.string().default('api'),
    CORS_ORIGIN: Joi.string().default('localhost'),
});

export interface Config {
    env: string;
    port: number;
    globalPrefix: string;
    cors: CorsOptions;
}

export const configFactory = (): Config => {
    return {
        env: process.env.NODE_ENV,
        port: parseInt(process.env.PORT),
        globalPrefix: process.env.GLOBAL_PREFIX,
        cors: {
            origin: process.env.CORS_ORIGIN
                ? process.env.CORS_ORIGIN.split(',').map(
                      origin => new RegExp(`^https?://${origin}:?[0-9]*$`),
                  )
                : false,
        },
    };
};
