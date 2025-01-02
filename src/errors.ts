type ErrorName =
  | 'PARAMETER_ERROR'

class AiAgentError extends Error {
  constructor(
    public name: ErrorName,
    public message: string,
    public cause?: Error,
  ) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export {
  AiAgentError,
}
