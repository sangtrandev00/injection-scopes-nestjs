import { Injectable } from "@nestjs/common";

// 1. Default Scope (Singleton Scope)
@Injectable()
export class DatabaseService {
    private connection: any;

    constructor() {
        this.connection = this.createConnection();
    }

    private createConnection() {
        // Logic tạo kết nối database
        return "Database connection";
    }

    getConnection() {
        return this.connection;
    }
}
