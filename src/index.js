/** @format */
import { Paging } from "./paging";
import { HttpStatusCode, HttpStatusMessage } from "./http-status";
import { CurrentUser } from "./current-user";
export class Response {
    constructor(builder) {
        this.status = builder.getStatus();
        this.message = builder.getMessage();
        this.data = builder.getData();
        this.paging = builder.getPaging();
        this.metadata = builder.getMetadata();
        this.currentUser = builder.getCurrentUser();
    }
}
export class HttpResponseBuilder {
    constructor(status, message) {
        this.setStatus(status);
        this.setMessage(message);
    }
    static customResponse() {
        return new HttpResponseBuilder();
    }
    static continue() {
        return new HttpResponseBuilder(HttpStatusCode.CONTINUE, HttpStatusMessage.CONTINUE);
    }
    static switchingProtocols() {
        return new HttpResponseBuilder(HttpStatusCode.SWITCHING_PROTOCOLS, HttpStatusMessage.SWITCHING_PROTOCOLS);
    }
    static processing() {
        return new HttpResponseBuilder(HttpStatusCode.PROCESSING, HttpStatusMessage.PROCESSING);
    }
    static ok() {
        return new HttpResponseBuilder(HttpStatusCode.OK, HttpStatusMessage.OK);
    }
    static created() {
        return new HttpResponseBuilder(HttpStatusCode.CREATED, HttpStatusMessage.CREATED);
    }
    static accepted() {
        return new HttpResponseBuilder(HttpStatusCode.ACCEPTED, HttpStatusMessage.ACCEPTED);
    }
    static nonAuthoritativeInformation() {
        return new HttpResponseBuilder(HttpStatusCode.NON_AUTHORITATIVE_INFORMATION, HttpStatusMessage.NON_AUTHORITATIVE_INFORMATION);
    }
    static noContent() {
        return new HttpResponseBuilder(HttpStatusCode.NO_CONTENT, HttpStatusMessage.NO_CONTENT);
    }
    static resetContent() {
        return new HttpResponseBuilder(HttpStatusCode.RESET_CONTENT, HttpStatusMessage.RESET_CONTENT);
    }
    static partialContent() {
        return new HttpResponseBuilder(HttpStatusCode.PARTIAL_CONTENT, HttpStatusMessage.PARTIAL_CONTENT);
    }
    static multipleChoices() {
        return new HttpResponseBuilder(HttpStatusCode.MULTIPLE_CHOICES, HttpStatusMessage.MULTIPLE_CHOICES);
    }
    static movedPermanently() {
        return new HttpResponseBuilder(HttpStatusCode.MOVED_PERMANENTLY, HttpStatusMessage.MOVED_PERMANENTLY);
    }
    static found() {
        return new HttpResponseBuilder(HttpStatusCode.FOUND, HttpStatusMessage.FOUND);
    }
    static seeOther() {
        return new HttpResponseBuilder(HttpStatusCode.SEE_OTHER, HttpStatusMessage.SEE_OTHER);
    }
    static notModified() {
        return new HttpResponseBuilder(HttpStatusCode.NOT_MODIFIED, HttpStatusMessage.NOT_MODIFIED);
    }
    static temporaryRedirect() {
        return new HttpResponseBuilder(HttpStatusCode.TEMPORARY_REDIRECT, HttpStatusMessage.TEMPORARY_REDIRECT);
    }
    static permanentRedirect() {
        return new HttpResponseBuilder(HttpStatusCode.PERMANENT_REDIRECT, HttpStatusMessage.PERMANENT_REDIRECT);
    }
    static badRequest() {
        return new HttpResponseBuilder(HttpStatusCode.BAD_REQUEST, HttpStatusMessage.BAD_REQUEST);
    }
    static unauthorized() {
        return new HttpResponseBuilder(HttpStatusCode.UNAUTHORIZED, HttpStatusMessage.UNAUTHORIZED);
    }
    static paymentRequired() {
        return new HttpResponseBuilder(HttpStatusCode.PAYMENT_REQUIRED, HttpStatusMessage.PAYMENT_REQUIRED);
    }
    static forbidden() {
        return new HttpResponseBuilder(HttpStatusCode.FORBIDDEN, HttpStatusMessage.FORBIDDEN);
    }
    static notFound() {
        return new HttpResponseBuilder(HttpStatusCode.NOT_FOUND, HttpStatusMessage.NOT_FOUND);
    }
    static internalServerError() {
        return new HttpResponseBuilder(HttpStatusCode.INTERNAL_SERVER_ERROR, HttpStatusMessage.INTERNAL_SERVER_ERROR);
    }
    static notImplemented() {
        return new HttpResponseBuilder(HttpStatusCode.NOT_IMPLEMENTED, HttpStatusMessage.NOT_IMPLEMENTED);
    }
    static badGateway() {
        return new HttpResponseBuilder(HttpStatusCode.BAD_GATEWAY, HttpStatusMessage.BAD_GATEWAY);
    }
    static serviceUnavailable() {
        return new HttpResponseBuilder(HttpStatusCode.SERVICE_UNAVAILABLE, HttpStatusMessage.SERVICE_UNAVAILABLE);
    }
    static gatewayTimeout() {
        return new HttpResponseBuilder(HttpStatusCode.GATEWAY_TIMEOUT, HttpStatusMessage.GATEWAY_TIMEOUT);
    }
    setData(data) {
        this.data = data;
        return this;
    }
    setMessage(msg) {
        if (typeof msg === "undefined") {
            return this;
        }
        if (typeof msg !== "string") {
            throw new TypeError("Message must be a string");
        }
        this.message = msg;
        return this;
    }
    setStatus(status) {
        if (typeof status === "undefined") {
            return this;
        }
        if (typeof status === "number") {
            if (status >= 100 && status <= 599) {
                this.status = status;
                return this;
            }
            else {
                throw new TypeError("Invalid status: Status code must be between 100 and 599");
            }
        }
        throw new TypeError("Status must be a number");
    }
    setCurrentUser(currentUser) {
        if (currentUser !== null && currentUser !== undefined) {
            if (!(currentUser instanceof CurrentUser)) {
                throw new TypeError(`Invalid type: Expected instance of CurrentUser, received ${typeof currentUser}`);
            }
            this.currentUser = currentUser;
        }
        return this;
    }
    setPaging(paging) {
        if (paging !== null && paging !== undefined) {
            if (!(paging instanceof Paging)) {
                throw new TypeError(`Invalid type: Expected instance of Paging, received ${typeof paging}`);
            }
            this.paging = paging;
        }
        return this;
    }
    setMetadata(metadata) {
        if (typeof metadata !== "object" || metadata === null || Array.isArray(metadata)) {
            throw new TypeError("Invalid metadata: Metadata must be a non-null object");
        }
        this.metadata = metadata;
        return this;
    }
    build() {
        return new Response(this);
    }
    getMetadata() {
        return this.metadata;
    }
    getCurrentUser() {
        return this.currentUser;
    }
    getStatus() {
        return this.status;
    }
    getMessage() {
        return this.message;
    }
    getData() {
        return this.data;
    }
    getPaging() {
        return this.paging;
    }
}
