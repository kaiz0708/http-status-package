import {Paging} from "./paging";
import {HttpStatusCode, HttpStatusMessage} from "./http-status";
import { CurrentUser } from "./current-user";

export class Response<T> {
    private status?: number;
    private message?: string;
    private data?: T;
    private paging?: Paging;
    private currentUser?: CurrentUser;
    private metadata?: Record<string, any>;


    constructor(builder: HttpResponseBuilder<T>) {
        this.status = builder.getStatus();
        this.message = builder.getMessage();
        this.data = builder.getData();
        this.paging = builder.getPaging();
        this.metadata = builder.getMetadata();
        this.currentUser = builder.getCurrentUser();
    }
}

export class HttpResponseBuilder<T> {
    private status?: number;
    private message?: string;
    private data?: T;
    private paging?: Paging;
    private currentUser?: CurrentUser;
    private metadata?: Record<string, any>;

    constructor(status?: number, message?: string) {
        this.setStatus(status)
        this.setMessage(message)
    }

    static customResponse<T = never>() {
        return new HttpResponseBuilder<T>();
    }

    static continue<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.CONTINUE, HttpStatusMessage.CONTINUE);
    }

    static switchingProtocols<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.SWITCHING_PROTOCOLS, HttpStatusMessage.SWITCHING_PROTOCOLS);
    }

    static processing<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.PROCESSING, HttpStatusMessage.PROCESSING);
    }

    static ok<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.OK, HttpStatusMessage.OK);
    }

    static created<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.CREATED, HttpStatusMessage.CREATED);
    }

    static accepted<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.ACCEPTED, HttpStatusMessage.ACCEPTED);
    }

    static nonAuthoritativeInformation<T = never>() {
        return new HttpResponseBuilder<T>(
            HttpStatusCode.NON_AUTHORITATIVE_INFORMATION,
            HttpStatusMessage.NON_AUTHORITATIVE_INFORMATION
        );
    }

    static noContent<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.NO_CONTENT, HttpStatusMessage.NO_CONTENT);
    }

    static resetContent<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.RESET_CONTENT, HttpStatusMessage.RESET_CONTENT);
    }

    static partialContent<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.PARTIAL_CONTENT, HttpStatusMessage.PARTIAL_CONTENT);
    }

    static multipleChoices<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.MULTIPLE_CHOICES, HttpStatusMessage.MULTIPLE_CHOICES);
    }

    static movedPermanently<T = never>()  {
        return new HttpResponseBuilder<T>(HttpStatusCode.MOVED_PERMANENTLY, HttpStatusMessage.MOVED_PERMANENTLY);
    }

    static found<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.FOUND, HttpStatusMessage.FOUND);
    }

    static seeOther<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.SEE_OTHER, HttpStatusMessage.SEE_OTHER);
    }

    static notModified<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.NOT_MODIFIED, HttpStatusMessage.NOT_MODIFIED);
    }

    static temporaryRedirect<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.TEMPORARY_REDIRECT, HttpStatusMessage.TEMPORARY_REDIRECT);
    }

    static permanentRedirect<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.PERMANENT_REDIRECT, HttpStatusMessage.PERMANENT_REDIRECT);
    }

    static badRequest<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.BAD_REQUEST, HttpStatusMessage.BAD_REQUEST);
    }

    static unauthorized<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.UNAUTHORIZED, HttpStatusMessage.UNAUTHORIZED);
    }

    static paymentRequired<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.PAYMENT_REQUIRED, HttpStatusMessage.PAYMENT_REQUIRED);
    }

    static forbidden<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.FORBIDDEN, HttpStatusMessage.FORBIDDEN);
    }

    static notFound<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.NOT_FOUND, HttpStatusMessage.NOT_FOUND);
    }

    static internalServerError<T = never>() {
        return new HttpResponseBuilder<T>(
            HttpStatusCode.INTERNAL_SERVER_ERROR,
            HttpStatusMessage.INTERNAL_SERVER_ERROR
        );
    }

    static notImplemented<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.NOT_IMPLEMENTED, HttpStatusMessage.NOT_IMPLEMENTED);
    }

    static badGateway<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.BAD_GATEWAY, HttpStatusMessage.BAD_GATEWAY);
    }

    static serviceUnavailable<T = never>() {
        return new HttpResponseBuilder<T>(
            HttpStatusCode.SERVICE_UNAVAILABLE,
            HttpStatusMessage.SERVICE_UNAVAILABLE
        );
    }

    static gatewayTimeout<T = never>() {
        return new HttpResponseBuilder<T>(HttpStatusCode.GATEWAY_TIMEOUT, HttpStatusMessage.GATEWAY_TIMEOUT);
    }

    setData(data: T) {
        this.data = data;
        return this;
    }

    setMessage(msg: string | undefined) {
        if(typeof msg === "undefined"){
            return this;
        }

        if (typeof msg !== 'string') {
            throw new TypeError('Message must be a string');
        }

        this.message = msg;
        return this;
    }

    setStatus(status: number | undefined) {

        if(typeof status === "undefined"){
            return this;
        }

        if (typeof status === 'number') {
            if(status >= 100 && status <= 599){
                this.status = status;
                return this;
            }else{
                throw new TypeError('Invalid status: Status code must be between 100 and 599');
            }
        }

        throw new TypeError("Status must be a number");
    }

    setCurrentUser(currentUser: CurrentUser){
        if (currentUser !== null && currentUser !== undefined) {
            if (!(currentUser instanceof Paging)) {
                throw new TypeError(`Invalid type: Expected instance of CurrentUser, received ${typeof currentUser}`);
            }
            this.currentUser = currentUser;
        }
        return this;
    }

    setPaging(paging: Paging) {
        if (paging !== null && paging !== undefined) {
            if (!(paging instanceof Paging)) {
                throw new TypeError(`Invalid type: Expected instance of Paging, received ${typeof paging}`);
            }
            this.paging = paging;
        }
        return this;
    }

    setMetadata(metadata : Record<string, any>) {
        if (typeof metadata !== 'object' || metadata === null || Array.isArray(metadata)) {
            throw new TypeError('Invalid metadata: Metadata must be a non-null object');
        }
        this.metadata = metadata;
        return this;
    }

    build(): Response<T> {
        return new Response(this);
    }

    getMetadata(): any | undefined {
        return this.metadata;
    }

    getCurrentUser(): CurrentUser | undefined {
        return this.currentUser;
    }

    getStatus(): number | undefined {
        return this.status;
    }

    getMessage(): string | undefined {
        return this.message;
    }

    getData(): T | undefined {
        return this.data;
    }

    getPaging(): Paging | undefined {
        return this.paging;
    }
}









