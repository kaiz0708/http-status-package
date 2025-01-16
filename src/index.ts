class IPaging {
    page?: number;
    limit?: number;
    total?: number;

    constructor(page?: number, limit?: number, total?: number) {
        this.page = page;
        this.limit = limit;
        this.total = total;
    }
}

class IResponse<T = any> {
    status: number;
    message: string;
    data?: T;
    paging?: IPaging | null;

    constructor(status: number, message: string, data?: T, paging?: IPaging | null) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.paging = paging;
    }
}

function CustomResponse<T = any>(
    status: number,
    message: string,
    data?: T,
    paging?: IPaging | null
): IResponse<T> {
    const response: IResponse<T> = { status, message };

    if (data !== null && data !== undefined) {
        if (typeof data !== typeof ({} as T)) {
            console.error(`Invalid data type. Expected ${typeof ({} as T)}, but got ${typeof data}`);
            response.message = `Invalid data type. Expected ${typeof ({} as T)}, but got ${typeof data}`;
            return response;
        }
        response.data = data;
    }

    if (data !== null && data !== undefined) {
        response.data = data;
    }

    if (paging !== null && paging !== undefined) {
        response.paging = paging;
    }

    return response;
}

export class HttpStatus {

    static readonly CONTINUE = {code: 100, message: "Continue"};
    static readonly SWITCHING_PROTOCOLS = {code: 101, message: "Switching Protocols"};
    static readonly PROCESSING = {code: 102, message: "Processing"};

    static readonly OK = {code: 200, message: "OK"};
    static readonly CREATED = {code: 201, message: "Created"};
    static readonly ACCEPTED = {code: 202, message: "Accepted"};
    static readonly NON_AUTHORITATIVE_INFORMATION = {code: 203, message: "Non-Authoritative Information"};
    static readonly NO_CONTENT = {code: 204, message: "No Content"};
    static readonly RESET_CONTENT = {code: 205, message: "Reset Content"};
    static readonly PARTIAL_CONTENT = {code: 206, message: "Partial Content"};

    static readonly MULTIPLE_CHOICES = {code: 300, message: "Multiple Choices"};
    static readonly MOVED_PERMANENTLY = {code: 301, message: "Moved Permanently"};
    static readonly FOUND = {code: 302, message: "Found"};
    static readonly SEE_OTHER = {code: 303, message: "See Other"};
    static readonly NOT_MODIFIED = {code: 304, message: "Not Modified"};
    static readonly TEMPORARY_REDIRECT = {code: 307, message: "Temporary Redirect"};
    static readonly PERMANENT_REDIRECT = {code: 308, message: "Permanent Redirect"};

    static readonly BAD_REQUEST = {code: 400, message: "Bad Request"};
    static readonly UNAUTHORIZED = {code: 401, message: "Unauthorized"};
    static readonly PAYMENT_REQUIRED = {code: 402, message: "Payment Required"};
    static readonly FORBIDDEN = {code: 403, message: "Forbidden"};
    static readonly NOT_FOUND = {code: 404, message: "Not Found"};

    static readonly INTERNAL_SERVER_ERROR = {code: 500, message: "Internal Server Error"};
    static readonly NOT_IMPLEMENTED = {code: 501, message: "Not Implemented"};
    static readonly BAD_GATEWAY = {code: 502, message: "Bad Gateway"};
    static readonly SERVICE_UNAVAILABLE = {code: 503, message: "Service Unavailable"};
    static readonly GATEWAY_TIMEOUT = {code: 504, message: "Gateway Timeout"};


    static CustomResponse(status: number, message: string, data: any | null = null, paging: IPaging | null = null) {
        return CustomResponse(status, message, data, paging);
    }

    static ContinueResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.CONTINUE.code, this.CONTINUE.message, data, paging);
    }

    static SwitchingProtocolsResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.SWITCHING_PROTOCOLS.code, this.SWITCHING_PROTOCOLS.message, data, paging);
    }

    static ProcessingResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.PROCESSING.code, this.PROCESSING.message, data, paging);
    }

    static OKResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.OK.code, this.OK.message, data, paging);
    }

    static CreatedResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.CREATED.code, this.CREATED.message, data, paging);
    }

    static AcceptedResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.ACCEPTED.code, this.ACCEPTED.message, data, paging);
    }

    static NonAuthoritativeInformationResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.NON_AUTHORITATIVE_INFORMATION.code, this.NON_AUTHORITATIVE_INFORMATION.message, data, paging);
    }

    static NoContentResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.NO_CONTENT.code, this.NO_CONTENT.message, data, paging);
    }

    static ResetContentResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.RESET_CONTENT.code, this.RESET_CONTENT.message, data, paging);
    }

    static PartialContentResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.PARTIAL_CONTENT.code, this.PARTIAL_CONTENT.message, data, paging);
    }

    static MultipleChoicesResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.MULTIPLE_CHOICES.code, this.MULTIPLE_CHOICES.message, data, paging);
    }

    static MovedPermanentlyResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.MOVED_PERMANENTLY.code, this.MOVED_PERMANENTLY.message, data, paging);
    }

    static FoundResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.FOUND.code, this.FOUND.message, data, paging);
    }

    static SeeOtherResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.SEE_OTHER.code, this.SEE_OTHER.message, data, paging);
    }

    static NotModifiedResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.NOT_MODIFIED.code, this.NOT_MODIFIED.message, data, paging);
    }

    static TemporaryRedirectResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.TEMPORARY_REDIRECT.code, this.TEMPORARY_REDIRECT.message, data, paging);
    }

    static PermanentRedirectResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.PERMANENT_REDIRECT.code, this.PERMANENT_REDIRECT.message, data, paging);
    }

    static BadRequestResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.BAD_REQUEST.code, this.BAD_REQUEST.message, data, paging);
    }

    static UnauthorizedResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.UNAUTHORIZED.code, this.UNAUTHORIZED.message, data, paging);
    }

    static PaymentRequiredResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.PAYMENT_REQUIRED.code, this.PAYMENT_REQUIRED.message, data, paging);
    }

    static ForbiddenResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.FORBIDDEN.code, this.FORBIDDEN.message, data, paging);
    }

    static NotFoundResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.NOT_FOUND.code, this.NOT_FOUND.message, data, paging);
    }

    static InternalServerErrorResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.INTERNAL_SERVER_ERROR.code, this.INTERNAL_SERVER_ERROR.message, data, paging);
    }

    static NotImplementedResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.NOT_IMPLEMENTED.code, this.NOT_IMPLEMENTED.message, data, paging);
    }

    static BadGatewayResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.BAD_GATEWAY.code, this.BAD_GATEWAY.message, data, paging);
    }

    static ServiceUnavailableResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.SERVICE_UNAVAILABLE.code, this.SERVICE_UNAVAILABLE.message, data, paging);
    }

    static GatewayTimeoutResponse(data: any | null = null, paging: IPaging | null = null): IResponse {
        return CustomResponse(this.GATEWAY_TIMEOUT.code, this.GATEWAY_TIMEOUT.message, data, paging);
    }
}

