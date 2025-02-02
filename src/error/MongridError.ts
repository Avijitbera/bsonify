export class MongridError extends Error {
    constructor(message:string, public code:string, public details?:any){
        super(message);
        this.name = 'MongirdError';
    }

}

export const ERROR_CODES = {
    DATABASE_CONNECTION_FAILED:'DATABASE_CONNECTION_FAILED',
    VALIDATION_ERROR:'VALIDATION_ERROR',
    TRANSACTION_ERROR:'TRANSACTION_ERROR',
    QUERY_EXECUTION_ERROR:'QUERY_EXECUTION_ERROR',
    HOOK_EXECUTION_ERROR:'HOOK_EXECUTION_ERROR',
    FIELD_IS_IMMUTABLE: 'FIELD_IS_IMMUTABLE',
    IMMUTABLE_FIELD_ERROR:'IMMUTABLE_FIELD_ERROR',
    FOREIGN_KEY_VIOLATION:'FOREIGN_KEY_VIOLATION',
    DOCUMENT_NOT_FOUND:'DOCUMENT_NOT_FOUND',
    COUNT_ERROR:'COUNT_ERROR',
    EXPLAIN_ERROR:'EXPLAIN_ERROR',
    PLUGIN_METHOD_NOT_FOUND:'PLUGIN_METHOD_NOT_FOUND'

}

