export function signUp({ email, password, name }) {
  return Promise.resolve({ data: { _id: "124", email, name } });
}

export function signIn({ email, password }) {
  return Promise.resolve({ token: "fake-jwt-token" });
}

export function getUser(token) {
  return Promise.resolve({
    data: { _id: "fake-id", email: "baker@example.com", name: "John Squire" },
  });
}
