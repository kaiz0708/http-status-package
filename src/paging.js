export class Paging {
    constructor(page, size, total) {
        this.setPage(page);
        this.setSize(size);
        this.setTotal(total);
    }
    setPage(page) {
        if (page !== undefined) {
            if (page < 0) {
                throw new TypeError('Page number cannot be negative');
            }
            this.page = page;
        }
        return this;
    }
    setSize(size) {
        if (size !== undefined) {
            if (size <= 0) {
                throw new TypeError('Page size must be greater than 0');
            }
            this.size = size;
        }
        return this;
    }
    setTotal(total) {
        if (total !== undefined) {
            if (total < 0) {
                throw new TypeError('Total count cannot be negative');
            }
            this.total = total;
        }
        return this;
    }
    getPage() {
        return this.page;
    }
    getSize() {
        return this.size;
    }
    getTotal() {
        return this.total;
    }
}
