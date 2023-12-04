export default class BadRequestException extends Error {
  private status_code: number = 400;

  constructor(message: string) {
    super(message);
  }

  getStatus() {
    return this.status_code;
  }
}
