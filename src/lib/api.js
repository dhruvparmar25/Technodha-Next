// API base URL – set NEXT_PUBLIC_API_URL in .env.local
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

function errorMessage(res, data) {
  if (data?.error) return data.error;
  if (data?.message) return data.message;
  if (data?.detail) return typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail);
  return `Request failed (${res.status})`;
}

async function request(endpoint, { method = "GET", body, headers = {} } = {}) {
  const res = await fetch(BASE_URL + endpoint, {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    ...(body != null && { body: JSON.stringify(body) }),
  });

  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json().catch(() => ({})) : {};

  if (!res.ok) throw new Error(errorMessage(res, data));
  return data;
}

export function get(endpoint, options) {
  return request(endpoint, { ...options, method: "GET" });
}

export function post(endpoint, body, options) {
  return request(endpoint, { ...options, method: "POST", body });
}

export function put(endpoint, body, options) {
  return request(endpoint, { ...options, method: "PUT", body });
}

export function patch(endpoint, body, options) {
  return request(endpoint, { ...options, method: "PATCH", body });
}

export function del(endpoint, options) {
  return request(endpoint, { ...options, method: "DELETE" });
}
