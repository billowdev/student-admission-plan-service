export class AppError extends Error {
	status: number;
	message: string;

	constructor(status: number, message: string) {
		super(message);
		this.status = status;
		this.message = message;
	}
}


export class FetchError extends Error {
	status: number;
	constructor(message: string, status: number) {
		super(message);
		this.name = "FetchError";
		this.status = status;
	}
}