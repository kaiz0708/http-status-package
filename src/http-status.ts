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