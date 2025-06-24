export var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["CONTINUE"] = 100] = "CONTINUE";
    HttpStatusCode[HttpStatusCode["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatusCode[HttpStatusCode["PROCESSING"] = 102] = "PROCESSING";
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["CREATED"] = 201] = "CREATED";
    HttpStatusCode[HttpStatusCode["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatusCode[HttpStatusCode["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatusCode[HttpStatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatusCode[HttpStatusCode["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatusCode[HttpStatusCode["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatusCode[HttpStatusCode["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    HttpStatusCode[HttpStatusCode["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatusCode[HttpStatusCode["FOUND"] = 302] = "FOUND";
    HttpStatusCode[HttpStatusCode["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatusCode[HttpStatusCode["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatusCode[HttpStatusCode["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatusCode[HttpStatusCode["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCode[HttpStatusCode["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatusCode[HttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatusCode[HttpStatusCode["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatusCode[HttpStatusCode["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatusCode[HttpStatusCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatusCode[HttpStatusCode["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
})(HttpStatusCode || (HttpStatusCode = {}));
export var HttpStatusMessage;
(function (HttpStatusMessage) {
    HttpStatusMessage["CONTINUE"] = "Continue";
    HttpStatusMessage["SWITCHING_PROTOCOLS"] = "Switching Protocols";
    HttpStatusMessage["PROCESSING"] = "Processing";
    HttpStatusMessage["OK"] = "OK";
    HttpStatusMessage["CREATED"] = "Created";
    HttpStatusMessage["ACCEPTED"] = "Accepted";
    HttpStatusMessage["NON_AUTHORITATIVE_INFORMATION"] = "Non-Authoritative Information";
    HttpStatusMessage["NO_CONTENT"] = "No Content";
    HttpStatusMessage["RESET_CONTENT"] = "Reset Content";
    HttpStatusMessage["PARTIAL_CONTENT"] = "Partial Content";
    HttpStatusMessage["MULTIPLE_CHOICES"] = "Multiple Choices";
    HttpStatusMessage["MOVED_PERMANENTLY"] = "Moved Permanently";
    HttpStatusMessage["FOUND"] = "Found";
    HttpStatusMessage["SEE_OTHER"] = "See Other";
    HttpStatusMessage["NOT_MODIFIED"] = "Not Modified";
    HttpStatusMessage["TEMPORARY_REDIRECT"] = "Temporary Redirect";
    HttpStatusMessage["PERMANENT_REDIRECT"] = "Permanent Redirect";
    HttpStatusMessage["BAD_REQUEST"] = "Bad Request";
    HttpStatusMessage["UNAUTHORIZED"] = "Unauthorized";
    HttpStatusMessage["PAYMENT_REQUIRED"] = "Payment Required";
    HttpStatusMessage["FORBIDDEN"] = "Forbidden";
    HttpStatusMessage["NOT_FOUND"] = "Not Found";
    HttpStatusMessage["INTERNAL_SERVER_ERROR"] = "Internal Server Error";
    HttpStatusMessage["NOT_IMPLEMENTED"] = "Not Implemented";
    HttpStatusMessage["BAD_GATEWAY"] = "Bad Gateway";
    HttpStatusMessage["SERVICE_UNAVAILABLE"] = "Service Unavailable";
    HttpStatusMessage["GATEWAY_TIMEOUT"] = "Gateway Timeout";
})(HttpStatusMessage || (HttpStatusMessage = {}));
export function getHttpStatusMessage(code) {
    const mapping = {
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
