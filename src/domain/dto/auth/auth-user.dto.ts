import { regularExps } from '../../../utils/regularExps';

export class AuthUserDto {

  private constructor(
    public readonly id: number,
    public readonly email: string,
    public readonly password: string,
    public readonly name: string,
  ) { }

  static create(props: { [key: string]: any; }): [string?, AuthUserDto?] {
    const { id, email, password, name } = props;

    if (!email) return ['Email is missing', undefined];
    if (!regularExps.email.test(email)) return ['Email is not valid', undefined];
    if (!password) return ['Password is missing', undefined];

    return [undefined, new AuthUserDto(id, email, password, name)];
  }
}