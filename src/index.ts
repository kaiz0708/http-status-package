export class Paging {
    private page?: number;
    private size?: number;
    private total?: number;

    constructor(page?: number, size?: number, total?: number) {
        this.page = page;
        this.size = size;
        this.total = total;
    }

    setPage(page : number){
        this.page = page;
        return this;
    }

    setSize(size : number){
        this.size = size;
        return this;
    }

    setTotal(total : number){
        this.total = total;
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
export class Response<T> {
    private status?: number;
    private message?: string;
    private data?: T;
    private paging?: Paging;
    private metadata?: Record<string, any>;
    private errors?: any[];
    private timestamp?: number;
    private path?: string;

    constructor(builder: ResponseBuilder<T>) {
        this.status = builder.getStatus();
        this.message = builder.getMessage();
        this.data = builder.getData();
        this.paging = builder.getPaging();
        this.metadata = builder.getMetadata();
    }
}


export class ResponseBuilder<T> {
    private status?: number;
    private message?: string;
    private data?: T;
    private paging?: Paging;
    private metadata?: Record<string, any>;

    constructor(status?: number, message?: string) {
        this.status = status;
        this.message = message;
    }

    static customResponse<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>();
    }

    // Informational Responses
    static continue<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.CONTINUE, HttpStatusMessage.CONTINUE);
    }

    static switchingProtocols<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.SWITCHING_PROTOCOLS, HttpStatusMessage.SWITCHING_PROTOCOLS);
    }

    static processing<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.PROCESSING, HttpStatusMessage.PROCESSING);
    }

    // Successful Responses
    static ok<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.OK, HttpStatusMessage.OK);
    }

    static created<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.CREATED, HttpStatusMessage.CREATED);
    }

    static accepted<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.ACCEPTED, HttpStatusMessage.ACCEPTED);
    }

    static nonAuthoritativeInformation<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(
            HttpStatusCode.NON_AUTHORITATIVE_INFORMATION,
            HttpStatusMessage.NON_AUTHORITATIVE_INFORMATION
        );
    }

    static noContent<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.NO_CONTENT, HttpStatusMessage.NO_CONTENT);
    }

    static resetContent<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.RESET_CONTENT, HttpStatusMessage.RESET_CONTENT);
    }

    static partialContent<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.PARTIAL_CONTENT, HttpStatusMessage.PARTIAL_CONTENT);
    }

    // Redirection Responses
    static multipleChoices<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.MULTIPLE_CHOICES, HttpStatusMessage.MULTIPLE_CHOICES);
    }

    static movedPermanently<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.MOVED_PERMANENTLY, HttpStatusMessage.MOVED_PERMANENTLY);
    }

    static found<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.FOUND, HttpStatusMessage.FOUND);
    }

    static seeOther<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.SEE_OTHER, HttpStatusMessage.SEE_OTHER);
    }

    static notModified<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.NOT_MODIFIED, HttpStatusMessage.NOT_MODIFIED);
    }

    static temporaryRedirect<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.TEMPORARY_REDIRECT, HttpStatusMessage.TEMPORARY_REDIRECT);
    }

    static permanentRedirect<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.PERMANENT_REDIRECT, HttpStatusMessage.PERMANENT_REDIRECT);
    }

    // Client Error Responses
    static badRequest<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.BAD_REQUEST, HttpStatusMessage.BAD_REQUEST);
    }

    static unauthorized<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.UNAUTHORIZED, HttpStatusMessage.UNAUTHORIZED);
    }

    static paymentRequired<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.PAYMENT_REQUIRED, HttpStatusMessage.PAYMENT_REQUIRED);
    }

    static forbidden<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.FORBIDDEN, HttpStatusMessage.FORBIDDEN);
    }

    static notFound<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.NOT_FOUND, HttpStatusMessage.NOT_FOUND);
    }

    // Server Error Responses
    static internalServerError<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(
            HttpStatusCode.INTERNAL_SERVER_ERROR,
            HttpStatusMessage.INTERNAL_SERVER_ERROR
        );
    }

    static notImplemented<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.NOT_IMPLEMENTED, HttpStatusMessage.NOT_IMPLEMENTED);
    }

    static badGateway<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.BAD_GATEWAY, HttpStatusMessage.BAD_GATEWAY);
    }

    static serviceUnavailable<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(
            HttpStatusCode.SERVICE_UNAVAILABLE,
            HttpStatusMessage.SERVICE_UNAVAILABLE
        );
    }

    static gatewayTimeout<T = never>() : ResponseBuilder<T> {
        return new ResponseBuilder<T>(HttpStatusCode.GATEWAY_TIMEOUT, HttpStatusMessage.GATEWAY_TIMEOUT);
    }


    setData(data: T) {
        if (data !== null && data !== undefined) {
            if (!(data instanceof Object && typeof data === 'object')) {
                console.error(`Invalid data type. Expected ${typeof ({} as T)}, but got ${typeof data}`);
                this.message = `Invalid data type. Expected ${typeof ({} as T)}, but got ${typeof data}`;
            } else {
                this.data = data;
            }
        }
        return this;
    }

    setMessage(msg: string) {
        this.message = msg;
        return this;
    }

    setStatus(status: number) {
        this.status = status;
        return this;
    }

    setPaging(paging: Paging) {
        if (paging !== null && paging !== undefined) {
            this.paging = paging;
        }
        return this;
    }

    setMetadata(metadata: Record<string, any>) {
        this.metadata = metadata;
        return this;
    }

    addMetadataField(key: string, value: any) {
        if (!this.metadata) {
            this.metadata = {};
        }
        this.metadata[key] = value;
        return this;
    }

    build(): Response<T> {
        return new Response(this);
    }

    getMetadata(): any | undefined {
        return this.metadata;
    }

    getMetadataField(key : string): any {
        if (!this.metadata) {
            return undefined;
        }
        return this.metadata[key];
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









