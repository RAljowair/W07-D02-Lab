"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
console.log(1);
const createUser = () => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield prisma.users.create({
        data: {
            id: 1234567121,
            full_name: "dnaskjn Alfwaz",
            email: "sald@kha.com",
            gender: "m",
            // date_of_birth:'1999/12/12',
            country_code: 1,
        },
    });
    console.log(user);
});
createUser();
console.log(2);
