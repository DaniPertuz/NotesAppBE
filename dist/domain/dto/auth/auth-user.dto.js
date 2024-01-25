"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserDto = void 0;
const regularExps_1 = require("../../../utils/regularExps");
class AuthUserDto {
    constructor(id, email, password, name) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
    }
    static create(props) {
        const { id, email, password, name } = props;
        if (!email)
            return ['Email is missing', undefined];
        if (!regularExps_1.regularExps.email.test(email))
            return ['Email is not valid', undefined];
        if (!password)
            return ['Password is missing', undefined];
        return [undefined, new AuthUserDto(id, email, password, name)];
    }
}
exports.AuthUserDto = AuthUserDto;
