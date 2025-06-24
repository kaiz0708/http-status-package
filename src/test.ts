/** @format */

import { CurrentUser } from "./current-user";
import { HttpResponseBuilder } from ".";
import { HttpStatusCode, HttpStatusMessage, getHttpStatusMessage } from "./http-status";
import { Paging } from "./paging";

const user = new CurrentUser(12).setExtraData({
   phone: "0326230072",
});

interface User {
   name: string;
   age: number;
   email?: string;
}

const user1: User = {
   name: "John",
   age: 25,
};

const paging = new Paging(1, 1, 1);

const http = HttpResponseBuilder.accepted<User>()
   .setMetadata({
      version: 100,
   })
   .setStatus(HttpStatusCode.BAD_GATEWAY)
   .setData(user1)
   .setCurrentUser(user)
   .setPaging(paging);

console.log(http);
