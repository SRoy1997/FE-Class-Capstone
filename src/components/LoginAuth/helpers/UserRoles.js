import WithAuth from "../core/WithAuth";

export const StandardUser = WithAuth([
  "user",
  "admin",
  "super-admin",
  "standard",
]);
export const AdminUser = WithAuth(["admin", "super-admin"]);
