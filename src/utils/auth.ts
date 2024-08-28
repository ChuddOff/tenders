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

interface registerResponse {
  error?: string;
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
  }).then((res) => res.clone().json() as Promise<registerResponse>);

  if (response.error) {
    throw new Error(response.error);
  }
}
