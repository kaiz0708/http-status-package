export class IPaging {
    page?: number;
    limit?: number;
    total?: number;

    constructor(page?: number, limit?: number, total?: number) {
        this.page = page;
        this.limit = limit;
        this.total = total;
    }
}

export class IResponse<T = any> {
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


function CustomResponse<T>(status: number, message: string, data: T | null = null, paging: IPaging | null = null): IResponse<T> {
    const response: IResponse<T> = { status, message };

if (data !== null && data !== undefined) {
    if (!(data as T)) {
        console.error(`Invalid data type. Expected ${typeof ({} as T)}, but got ${typeof data}`);
        response.message = `Invalid data type. Expected ${typeof ({} as T)}, but got ${typeof data}`;
        return response;
    }
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

    private static checkMessage(message : any) : boolean{
        return message !== null && message !== undefined;
    }

    static CustomResponseType<T>(status: number , message: string, data: T | null = null, paging: IPaging | null = null) : IResponse<T> {
        return CustomResponse(status, message, data, paging);
    }

    static ContinueResponse<T>(message: string | null = null, data: T | null = null, paging: IPaging | null = null): IResponse<T> {
        let mess: string = this.checkMessage(message) ? message! : this.CONTINUE.message;
        return this.CustomResponseType(this.CONTINUE.code, mess, data, paging);
    }

    static SwitchingProtocolsResponse<T>(message: string | null = null,data: T | null = null, paging: IPaging | null = null): IResponse<T> {
        let mess : string | null = this.checkMessage(message) ? message! :this.SWITCHING_PROTOCOLS.message;
        return this.CustomResponseType(this.SWITCHING_PROTOCOLS.code, mess, data, paging);
    }


    static ProcessingResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.PROCESSING.message;
        return this.CustomResponseType(this.PROCESSING.code, mess, data, paging);
    }

    static OKResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.OK.message;
        return this.CustomResponseType(this.OK.code, mess, data, paging);
    }

    static CreatedResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.CREATED.message;
        return this.CustomResponseType(this.CREATED.code, mess, data, paging);
    }

    static AcceptedResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.ACCEPTED.message;
        return this.CustomResponseType(this.ACCEPTED.code, mess, data, paging);
    }

    static NonAuthoritativeInformationResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.NON_AUTHORITATIVE_INFORMATION.message;
        return this.CustomResponseType(this.NON_AUTHORITATIVE_INFORMATION.code, mess, data, paging);
    }

    static NoContentResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.NO_CONTENT.message;
        return this.CustomResponseType(this.NO_CONTENT.code, mess, data, paging);
    }

    static ResetContentResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.RESET_CONTENT.message;
        return this.CustomResponseType(this.RESET_CONTENT.code, mess, data, paging);
    }

    static PartialContentResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.PARTIAL_CONTENT.message;
        return this.CustomResponseType(this.PARTIAL_CONTENT.code, mess, data, paging);
    }

    static MultipleChoicesResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.MULTIPLE_CHOICES.message;
        return this.CustomResponseType(this.MULTIPLE_CHOICES.code, mess, data, paging);
    }

    static MovedPermanentlyResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.MOVED_PERMANENTLY.message;
        return this.CustomResponseType(this.MOVED_PERMANENTLY.code, mess, data, paging);
    }

    static FoundResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.FOUND.message;
        return this.CustomResponseType(this.FOUND.code, mess, data, paging);
    }

    static SeeOtherResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.SEE_OTHER.message;
        return this.CustomResponseType(this.SEE_OTHER.code, mess, data, paging);
    }

    static NotModifiedResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.NOT_MODIFIED.message;
        return this.CustomResponseType(this.NOT_MODIFIED.code, mess, data, paging);
    }

    static TemporaryRedirectResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.TEMPORARY_REDIRECT.message;
        return this.CustomResponseType(this.TEMPORARY_REDIRECT.code, mess, data, paging);
    }

    static PermanentRedirectResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.PERMANENT_REDIRECT.message;
        return this.CustomResponseType(this.PERMANENT_REDIRECT.code, mess, data, paging);
    }

    static BadRequestResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.BAD_REQUEST.message;
        return this.CustomResponseType(this.BAD_REQUEST.code, mess, data, paging);
    }

    static UnauthorizedResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.UNAUTHORIZED.message;
        return this.CustomResponseType(this.UNAUTHORIZED.code, mess, data, paging);
    }

    static PaymentRequiredResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.PAYMENT_REQUIRED.message;
        return this.CustomResponseType(this.PAYMENT_REQUIRED.code, mess, data, paging);
    }

    static ForbiddenResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.FORBIDDEN.message;
        return this.CustomResponseType(this.FORBIDDEN.code, mess, data, paging);
    }

    static NotFoundResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.NOT_FOUND.message;
        return this.CustomResponseType(this.NOT_FOUND.code, mess, data, paging);
    }

    static InternalServerErrorResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.INTERNAL_SERVER_ERROR.message;
        return this.CustomResponseType(this.INTERNAL_SERVER_ERROR.code, mess, data, paging);
    }

    static NotImplementedResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.NOT_IMPLEMENTED.message;
        return this.CustomResponseType(this.NOT_IMPLEMENTED.code, mess, data, paging);
    }

    static BadGatewayResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.BAD_GATEWAY.message;
        return this.CustomResponseType(this.BAD_GATEWAY.code, mess, data, paging);
    }

    static ServiceUnavailableResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.SERVICE_UNAVAILABLE.message;
        return this.CustomResponseType(this.SERVICE_UNAVAILABLE.code, mess, data, paging);
    }

    static GatewayTimeoutResponse<T>(
        message: string | null = null,
        data: T | null = null,
        paging: IPaging | null = null
    ): IResponse<T> {
        const mess : string | null = this.checkMessage(message) ? message! : this.GATEWAY_TIMEOUT.message;
        return this.CustomResponseType(this.GATEWAY_TIMEOUT.code, mess, data, paging);
    }
}

