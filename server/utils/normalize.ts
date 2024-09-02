
interface User {
  name: string;
  username: string;
  email: string;
}

export function normalizeUser(user: User) {
  const name = user.name.toLowerCase();
  const username = user.username.toLowerCase();
  const email = user.email.toLowerCase();

  return {name, username, email}

}