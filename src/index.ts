export class Paging {
    private page?: number;
    private size?: number;
    private total?: number;

    constructor(page?: number, size?: number, total?: number) {
        this.setPage(page);
        this.setSize(size);
        this.setTotal(total);
    }

    setPage(page?: number) {
        if (page !== undefined) {
            if (page < 0) {
                throw new TypeError('Page number cannot be negative');
            }
            this.page = page;
        }
        return this;
    }

    setSize(size?: number) {
        if (size !== undefined) {
            if (size <= 0) {
                throw new TypeError('Page size must be greater than 0');
            }
            this.size = size;
        }
        return this;
    }

    setTotal(total?: number) {
        if (total !== undefined) {
            if (total < 0) {
                throw new TypeError('Total count cannot be negative');
            }
            this.total = total;
        }
        return this;
    }

    getPage() : number | undefined {
        return this.page;
    }

    getSize() : number | undefined {
        return this.size;
    }

    getTotal() : number | undefined {
        return this.total;
    }
}


export class HttpResponseBuilder<T> {
    private status?: number;
    private message?: string;
    private data?: T;
    private paging?: Paging;
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

    getMetadata(): any | undefined {
        return this.metadata;
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

export enum HttpStatusCode {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,

    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,

    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,

    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,

    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
}

export enum HttpStatusMessage {
    CONTINUE = "Continue",
    SWITCHING_PROTOCOLS = "Switching Protocols",
    PROCESSING = "Processing",

    OK = "OK",
    CREATED = "Created",
    ACCEPTED = "Accepted",
    NON_AUTHORITATIVE_INFORMATION = "Non-Authoritative Information",
    NO_CONTENT = "No Content",
    RESET_CONTENT = "Reset Content",
    PARTIAL_CONTENT = "Partial Content",

    MULTIPLE_CHOICES = "Multiple Choices",
    MOVED_PERMANENTLY = "Moved Permanently",
    FOUND = "Found",
    SEE_OTHER = "See Other",
    NOT_MODIFIED = "Not Modified",
    TEMPORARY_REDIRECT = "Temporary Redirect",
    PERMANENT_REDIRECT = "Permanent Redirect",

    BAD_REQUEST = "Bad Request",
    UNAUTHORIZED = "Unauthorized",
    PAYMENT_REQUIRED = "Payment Required",
    FORBIDDEN = "Forbidden",
    NOT_FOUND = "Not Found",

    INTERNAL_SERVER_ERROR = "Internal Server Error",
    NOT_IMPLEMENTED = "Not Implemented",
    BAD_GATEWAY = "Bad Gateway",
    SERVICE_UNAVAILABLE = "Service Unavailable",
    GATEWAY_TIMEOUT = "Gateway Timeout",
}

export function getHttpStatusMessage(code: HttpStatusCode): HttpStatusMessage | undefined {
    const mapping: Record<HttpStatusCode, HttpStatusMessage> = {
        [HttpStatusCode.CONTINUE]: HttpStatusMessage.CONTINUE,
        [HttpStatusCode.SWITCHING_PROTOCOLS]: HttpStatusMessage.SWITCHING_PROTOCOLS,
        [HttpStatusCode.PROCESSING]: HttpStatusMessage.PROCESSING,

        [HttpStatusCode.OK]: HttpStatusMessage.OK,
        [HttpStatusCode.CREATED]: HttpStatusMessage.CREATED,
        [HttpStatusCode.ACCEPTED]: HttpStatusMessage.ACCEPTED,
        [HttpStatusCode.NON_AUTHORITATIVE_INFORMATION]: HttpStatusMessage.NON_AUTHORITATIVE_INFORMATION,
        [HttpStatusCode.NO_CONTENT]: HttpStatusMessage.NO_CONTENT,
        [HttpStatusCode.RESET_CONTENT]: HttpStatusMessage.RESET_CONTENT,
        [HttpStatusCode.PARTIAL_CONTENT]: HttpStatusMessage.PARTIAL_CONTENT,

        [HttpStatusCode.MULTIPLE_CHOICES]: HttpStatusMessage.MULTIPLE_CHOICES,
        [HttpStatusCode.MOVED_PERMANENTLY]: HttpStatusMessage.MOVED_PERMANENTLY,
        [HttpStatusCode.FOUND]: HttpStatusMessage.FOUND,
        [HttpStatusCode.SEE_OTHER]: HttpStatusMessage.SEE_OTHER,
        [HttpStatusCode.NOT_MODIFIED]: HttpStatusMessage.NOT_MODIFIED,
        [HttpStatusCode.TEMPORARY_REDIRECT]: HttpStatusMessage.TEMPORARY_REDIRECT,
        [HttpStatusCode.PERMANENT_REDIRECT]: HttpStatusMessage.PERMANENT_REDIRECT,

        [HttpStatusCode.BAD_REQUEST]: HttpStatusMessage.BAD_REQUEST,
        [HttpStatusCode.UNAUTHORIZED]: HttpStatusMessage.UNAUTHORIZED,
        [HttpStatusCode.PAYMENT_REQUIRED]: HttpStatusMessage.PAYMENT_REQUIRED,
        [HttpStatusCode.FORBIDDEN]: HttpStatusMessage.FORBIDDEN,
        [HttpStatusCode.NOT_FOUND]: HttpStatusMessage.NOT_FOUND,

        [HttpStatusCode.INTERNAL_SERVER_ERROR]: HttpStatusMessage.INTERNAL_SERVER_ERROR,
        [HttpStatusCode.NOT_IMPLEMENTED]: HttpStatusMessage.NOT_IMPLEMENTED,
        [HttpStatusCode.BAD_GATEWAY]: HttpStatusMessage.BAD_GATEWAY,
        [HttpStatusCode.SERVICE_UNAVAILABLE]: HttpStatusMessage.SERVICE_UNAVAILABLE,
        [HttpStatusCode.GATEWAY_TIMEOUT]: HttpStatusMessage.GATEWAY_TIMEOUT,
    };

    return mapping[code];
}
