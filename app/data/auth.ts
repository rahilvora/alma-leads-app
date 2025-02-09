import { User } from "./data-defination";
import { users } from "./user-admin-mock";

export function getAuthUser(): User {
  // In a real app, this would validate session/token
  // For mock purposes, return the first (admin) user
  return users[0];
}
