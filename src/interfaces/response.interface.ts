export default class Result<T> {
  ok: boolean = true;

  data: T | null = null;

  error: any | null;

  constructor(data?: T, error?: any, ok?: boolean) {
    this.ok = ok ?? true;
    this.data = data ?? null;
    this.error = error;
  }
}
