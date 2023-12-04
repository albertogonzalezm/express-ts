export default class NotFoundException extends Error {
  private resource_name: string;
  private field_name?: string;
  private field_value?: string;
  private status_code: number = 404;

  constructor(
    resource_name: string,
    field_name?: string,
    field_value?: string
  ) {
    super("");
    this.resource_name = resource_name;
    this.field_name = field_name;
    this.field_value = field_value;
    this.message = this.response();
  }

  response() {
    if (this.field_name && this.field_value) {
      return `${this.resource_name} with ${this.field_name}=${this.field_value} not found`;
    }
    return `Records of ${this.resource_name} not found`;
  }

  getStatus() {
    this.status_code;
  }
}
