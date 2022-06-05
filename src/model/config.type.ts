export interface ResponseBase<T = Record<string, unknown>> {
  code: number;

  msg?: string | null;

  data?: T;

  status: boolean;
}

export interface ParamsNetwork {
  url: string;
  params?: Record<string, string | number>;
  path?: Record<string, string | number>;
  body?: Record<string, unknown>;
}

export type ValidateMessageObject = {
  keyT: string;
  optionsTx?: Record<string, string | number>;
  options?: Record<string, string | number>;
};
