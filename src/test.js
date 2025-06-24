/** @format */
import { CurrentUser } from "./current-user";
import { HttpResponseBuilder } from ".";
import { HttpStatusCode } from "./http-status";
import { Paging } from "./paging";
const user = new CurrentUser(12).setExtraData({
    phone: "0326230072",
});
const user1 = {
    name: "John",
    age: 25,
};
const paging = new Paging(1, 1, 1);
const http = HttpResponseBuilder.accepted()
    .setMetadata({
    version: 100,
})
    .setStatus(HttpStatusCode.BAD_GATEWAY)
    .setData(user1)
    .setCurrentUser(user)
    .setPaging(paging);
console.log(http);
