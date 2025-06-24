/** @format */
export class CurrentUser {
    constructor(idUser) {
        this.setCurrentUserId(idUser);
    }
    setExtraData(extraData) {
        if (typeof extraData !== "object" || extraData === null || Array.isArray(extraData)) {
            throw new TypeError("Invalid metadata: Metadata must be a non-null object");
        }
        this.extraData = extraData;
        return this;
    }
    setCurrentUserId(idUser) {
        if (idUser !== null && idUser !== undefined) {
            if (typeof idUser === "string" || typeof idUser === "number") {
                this.idUser = idUser;
                return this;
            }
            throw new TypeError(`Invalid type for idUser, expected a string or a number`);
        }
        return this;
    }
    getCurrentUserId() {
        return this.idUser;
    }
    getExtraData() {
        return this.extraData;
    }
}
