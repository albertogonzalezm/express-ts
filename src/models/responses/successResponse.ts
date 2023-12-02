export default class SuccessResponse {
  private date: string = new Date().toUTCString();
  private message?: string;
  private resource?: object;

  constructor(success: { message?: string; resource?: object }) {
    this.message = success.message;
    this.resource = success.resource;
  }
}
