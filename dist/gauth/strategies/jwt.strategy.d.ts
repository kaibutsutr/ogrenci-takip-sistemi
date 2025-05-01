import { Strategy } from 'passport-jwt';
import { ConfigType } from '@nestjs/config';
import config from '../../config/config';
import { Repository } from 'typeorm';
import { User } from '../../user/user.entity';
export type JwtPayload = {
    sub: string;
    email: string;
};
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userRepository;
    constructor(configService: ConfigType<typeof config>, userRepository: Repository<User>);
    validate(payload: JwtPayload): Promise<{
        id: string;
        email: string;
    }>;
}
export {};
