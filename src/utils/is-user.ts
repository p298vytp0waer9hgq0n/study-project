import type { User } from 'firebase/auth';

export function isUser(data: unknown): data is User {
    return data instanceof Object && 'isAnonymous' in data && 'accessToken' in data && data.isAnonymous === false;
}
