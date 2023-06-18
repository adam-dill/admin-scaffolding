export type ResponseType<TArgs extends any[]> = (...args: TArgs) => Promise<Response>;