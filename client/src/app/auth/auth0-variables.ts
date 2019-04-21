import { environment } from 'src/environments/environment.prod';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: environment.clientID,
  domain: environment.domain,
  callbackURL: environment.callbackURL
};
