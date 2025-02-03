export class CurrentUser {
    private idUser?: number | string;
    private extraData?: Record<string, any>

    constructor(idUser?: number | string) {
        this.setCurrentUserId(idUser)
    }

    setExtraData(extraData?: Record<string, any>){
        if (typeof extraData !== 'object' || extraData === null || Array.isArray(extraData)) {
            throw new TypeError('Invalid metadata: Metadata must be a non-null object');
        }
        this.extraData = extraData;
        return this;
    }

    setCurrentUserId(idUser?: number | string){
        if (idUser !== null && idUser !== undefined) {
            if (typeof idUser === 'string' || typeof idUser === "number") {
                this.idUser = idUser;
                return this;
            }
            throw new TypeError(`Invalid type for idUser, expected a string or a number`);
        }
        return this;
    }

    getCurrentUserId() : number | string | undefined{
        return this.idUser;
    }

    getExtraData() : Record<string, any> | undefined{
        return this.extraData;
    }

}