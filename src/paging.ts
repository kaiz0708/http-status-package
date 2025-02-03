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