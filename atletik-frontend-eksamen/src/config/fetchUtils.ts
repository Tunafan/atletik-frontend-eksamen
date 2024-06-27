export class HttpException extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export const handleHttpErrors = async (response: Response) => {
  if (!response.ok) {
    const message = await response.text();
    throw new HttpException(
      response.status,
      message || "Unknown error occurred"
    );
  }
  return response.json();
};
// @ts-ignore
export const makeOptions = (method: string, body: any) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};
