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

export class LoginError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'LoginError';
	}
}

export class UserExistsError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'UserExistsError';
	}
}

export class UserCreationError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'UserCreationError';
	}
}

export class UserAlreadyExistsError extends Error {
	constructor(message: string) {
	  super(message);
	  this.name = "UserAlreadyExistsError";
	}
  }
  