export interface registerPayload {
  username: string;
  companyName: string;
  stationaryNumber: string;
  mobileNumber: string;
  email: string;
  password: string;
}

export interface loginPayload {
  email: string;
  password: string;
}

const registerApiUrl = "/api/register";

export async function registerFn(credentials: registerPayload) {
  const response = await fetch(registerApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    cache: "no-store",
  });

  return response.json() as Promise<registerPayload>;
}
