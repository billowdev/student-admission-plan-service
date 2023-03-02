export class AuthError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "AuthError";
	}
}

export const createAuthError = (message: string): AuthError => {
	return new AuthError(message);
};

export class UserNotFoundException extends Error {
	constructor(message: string) {
		super(message);
		this.name = "UserNotFoundException";
	}
}


  