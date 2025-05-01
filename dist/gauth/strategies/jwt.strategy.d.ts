import { Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { GoogleUser } from '../guser.entity';
export type JwtPayload = {
    sub: string;
    email: string;
};
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: Repository<GoogleUser>);
    validate(payload: JwtPayload): Promise<{
        id: string;
        email: string;
    }>;
}
export {};
