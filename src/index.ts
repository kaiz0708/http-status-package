
export class HttpStatus {

    static readonly CONTINUE = { code: 100, message: "Continue" };
    static readonly SWITCHING_PROTOCOLS = { code: 101, message: "Switching Protocols" };
    static readonly PROCESSING = { code: 102, message: "Processing" };


    static readonly OK = { code: 200, message: "OK" };
    static readonly CREATED = { code: 201, message: "Created" };
    static readonly ACCEPTED = { code: 202, message: "Accepted" };
    static readonly NON_AUTHORITATIVE_INFORMATION = { code: 203, message: "Non-Authoritative Information" };
    static readonly NO_CONTENT = { code: 204, message: "No Content" };
    static readonly RESET_CONTENT = { code: 205, message: "Reset Content" };
    static readonly PARTIAL_CONTENT = { code: 206, message: "Partial Content" };


    static readonly MULTIPLE_CHOICES = { code: 300, message: "Multiple Choices" };
    static readonly MOVED_PERMANENTLY = { code: 301, message: "Moved Permanently" };
    static readonly FOUND = { code: 302, message: "Found" };
    static readonly SEE_OTHER = { code: 303, message: "See Other" };
    static readonly NOT_MODIFIED = { code: 304, message: "Not Modified" };
    static readonly TEMPORARY_REDIRECT = { code: 307, message: "Temporary Redirect" };
    static readonly PERMANENT_REDIRECT = { code: 308, message: "Permanent Redirect" };


    static readonly BAD_REQUEST = { code: 400, message: "Bad Request" };
    static readonly UNAUTHORIZED = { code: 401, message: "Unauthorized" };
    static readonly PAYMENT_REQUIRED = { code: 402, message: "Payment Required" };
    static readonly FORBIDDEN = { code: 403, message: "Forbidden" };
    static readonly NOT_FOUND = { code: 404, message: "Not Found" };


    static readonly INTERNAL_SERVER_ERROR = { code: 500, message: "Internal Server Error" };
    static readonly NOT_IMPLEMENTED = { code: 501, message: "Not Implemented" };
    static readonly BAD_GATEWAY = { code: 502, message: "Bad Gateway" };
    static readonly SERVICE_UNAVAILABLE = { code: 503, message: "Service Unavailable" };
    static readonly GATEWAY_TIMEOUT = { code: 504, message: "Gateway Timeout" };
}
