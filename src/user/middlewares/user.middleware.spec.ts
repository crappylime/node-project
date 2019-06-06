import { ConfigService } from './../../config/config.service';
import { TokenPayloadModel } from './../models/user.model';
import { AuthService } from './../services/auth.service';
import { UserMiddleware } from './user.middleware';

describe('UserMiddleware', () => {
  let middleware: UserMiddleware;

  const config: Partial<ConfigService> = {
    TOKEN_HEADER_NAME: 'api token',
  };

  const payload: TokenPayloadModel = {
    user: { id: 1, name: 'Marta' }
  };

  const token = 'test-token-string';

  const authService: Partial<AuthService> = {
    async tokenVerify(t: string): Promise<TokenPayloadModel> {
      return (t === token) ? payload : null;
    }
  };

  beforeAll(() => {
    middleware = new UserMiddleware(config as ConfigService, authService as AuthService);
  });

  it('should be defined', () => {
    expect(middleware).toBeDefined();
  });

  it('should add tokenPayload to req', async () => {
    const req = {
      headers: {
        [config.TOKEN_HEADER_NAME]: token,
      },
      tokenPayload: undefined,
    };

    const next = jest.fn();

    await middleware.use(req, {}, next);

    expect(req.tokenPayload).toMatchObject(payload);

    expect(next).toHaveBeenCalled();
  });
});
