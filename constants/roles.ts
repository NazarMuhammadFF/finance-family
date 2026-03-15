export const roles = ["owner", "admin", "member"] as const;

export type Role = (typeof roles)[number];
