import NotFoundException from "./ResourceNotFoundException";
import BadRequestException from "./ResourceBadRequestException";

export default class HandlerException extends Error {
  private status_code: number;
  private resource_name?: string;
  private field_name?: string;
  private field_value?: string;

  constructor(exception: {
    message?: string;
    resource_name?: string;
    field_name?: string;
    field_value?: string;
    status_code: number;
  }) {
    super(exception.message || "");
    this.name = "HandlerException";
    this.resource_name = exception.resource_name;
    this.field_name = exception.field_name;
    this.field_value = exception.field_value;
    this.status_code = exception.status_code;
    this.message = this.responseMessage();
  }

  responseMessage(): string {
    const HttpStatusCode: { [key: number]: string } = {
      400: new BadRequestException(this.message).toString(),
      404: new NotFoundException(
        this.resource_name,
        this.field_name,
        this.field_value
      ).toString(),
    };

    if (HttpStatusCode.hasOwnProperty(this.status_code)) {
      return HttpStatusCode[this.status_code];
    }

    return this.message;
  }

  getStatus() {
    return this.status_code;
  }
}
