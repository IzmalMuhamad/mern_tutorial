# HTTP Status Codes

## 👉 ✅ 1xx — Informational

- Informational responses.
- The request has been received and the process is continuing.

---

## 👉 ✅ 2xx — Success

The request was successfully received, understood, and accepted.

### Common Status Codes

- **200 OK** — Everything worked as expected.
- **201 Created** — New resource successfully created (e.g., after a POST request).

---

## 👉 ⚠️ 3xx — Redirection

The 3xx status codes are for redirection, meaning the server is telling the client:

> "Hey, the thing you're looking for is somewhere else."

### Common Status Codes

- **301 Moved Permanently**

### Example

Your site changes from:

```text
http://example.com
```

to:

```text
https://example.com
```

Set up a **301 redirect** so visitors and search engines know to use the new URL.

---

## 👉 ❌ 4xx — Client Errors

These happen when the problem is on the user's side, meaning the browser or app made a bad request.

### Think of it like

> "You (the client) messed up."

### Common Status Codes

- **400 Bad Request** — The request is malformed or invalid.
- **401 Unauthorized** — You must log in (missing or invalid credentials).
- **403 Forbidden** — You're not allowed to access this.
- **404 Not Found** — The URL doesn't exist.
- **429 Too Many Requests** — Too many requests were sent in a short period.

---

## 👉 💥 5xx — Server Errors

These happen when something goes wrong on the server side, even though the client made a valid request.

### Think of it like

> "The server tried, but failed."

### Common Status Codes

- **500 Internal Server Error** — Something broke on the server.
- **503 Service Unavailable** — The server is temporarily overloaded or down.

---

# Quick Memory Trick

| Range | Meaning | Remember As |
|---------|---------|-------------|
| **1xx** | Informational | Just letting you know |
| **2xx** | Success | Everything is OK |
| **3xx** | Redirection | Go somewhere else |
| **4xx** | Client Error | You messed up |
| **5xx** | Server Error | I messed up |