import { AnyRecord } from 'node:dns';

export const API_URL = 'https://test-job.pixli.app/send.php';

export interface HttpResponse<T> extends Response {
    parsedBody?: T
}
export const paramsJsonToFormData = (paramsJson:Record<string, any >):FormData => {
  const formData = new FormData();
  Object.entries(paramsJson).forEach(([key, value]) => {
    formData.set(key, value);
  });
  return formData;
};
export const http = async <T>(request:RequestInfo):Promise<HttpResponse<T>> => {
  const response:HttpResponse<T> = await fetch(request);
  response.parsedBody = await response.json();
  return response;
};

export const postJson = async <T>(
  path: string,
  body: string | Record<string, unknown>,
  args: RequestInit = { method: 'post', body: JSON.stringify(body) }
): Promise<HttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};

export const postFormData = async <T>(
  path: string,
  formData: FormData,
  args: RequestInit = { method: 'post', body: formData}
): Promise<HttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};