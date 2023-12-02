export default class AuthService {
  singIn(username: string, password: string): boolean {
    return username === "admin" && password === "admin";
  }
}
