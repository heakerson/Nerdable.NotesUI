export enum ReturnCode{
    Success = 1,
    PartialSuccess,
    Fail,
    InvalidInput,
    DoesNotExist,
    NoEntitiesMatchQuery,
    MappingFailure,
    DatabaseUpdateFailure,
    DatabaseAddFailure,
    DatabaseRemoveFailure,
    DbSetDoesNotExist,
    None
}