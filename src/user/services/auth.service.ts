import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '../../config';
import { TokenPayloadModel } from '../models';

@Injectable()
export class AuthService {
    constructor(private config: ConfigService) { }

    async tokenSign(payload: TokenPayloadModel): Promise<string> {
        return jwt.sign(payload, this.config.JWT_SECRET);
    }

    async tokenDecode(token: string): Promise<TokenPayloadModel | null> {
        return jwt.decode(token);
    }

    async tokenVerify(token: string): Promise<TokenPayloadModel | null> {
        try {
            return jwt.verify(token, this.config.JWT_SECRET);
        } catch (err) {
            return null;
        }
    }
}
