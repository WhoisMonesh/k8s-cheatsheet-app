declare module 'sql.js' {
  export interface Database {
    run(sql: string, params?: any[]): void;
    exec(sql: string): { columns: string[], values: any[][] }[];
    export(): Uint8Array;
    close(): void;
  }
  
  export interface SqlJsStatic {
    Database: new (data?: Uint8Array) => Database;
  }
  
  export default function initSqlJs(config?: any): Promise<SqlJsStatic>;
}
