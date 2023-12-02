export default class ErrorResponse {
  private date: string = new Date().toUTCString();
  private message: string;
  private url: string;

  constructor(message: string, url: string) {
    this.message = message;
    this.url = url;
  }
}
