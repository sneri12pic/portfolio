// label -> [hex color, shields.io logo slug?]. Unmapped labels fall back to a neutral badge.
const BADGES: Record<string, [string, string?]> = {
  kotlin: ["7F52FF", "kotlin"],
  android: ["34A853", "android"],
  "jetpack compose": ["4285F4", "jetpackcompose"],
  flutter: ["02569B", "flutter"],
  room: ["3DDC84", "android"],
  "health connect": ["34A853", "android"],
  mvvm: ["6B7280"],
  "ux research": ["6B7280"],
  "self-determination theory": ["6B7280"],
  python: ["3776AB", "python"],
  java: ["ED8B00", "openjdk"],
  typescript: ["3178C6", "typescript"],
  javascript: ["F7DF1E", "javascript"],
  html: ["E34F26", "html5"],
  css: ["1572B6", "css3"],
  sql: ["336791", "postgresql"],
  postgresql: ["336791", "postgresql"],
  mongodb: ["47A248", "mongodb"],
  redis: ["DC382D", "redis"],
  "django rest": ["092E20", "django"],
  flask: ["000000", "flask"],
  fastapi: ["009688", "fastapi"],
  "spring boot": ["6DB33F", "springboot"],
  "spring data jpa": ["6DB33F", "spring"],
  maven: ["C71A36", "apachemaven"],
  jetty: ["6B7280"],
  servlets: ["6B7280"],
  "rest apis": ["111827", "swagger"],
  kafka: ["231F20", "apachekafka"],
  microservices: ["6B7280"],
  "okta oidc": ["007DC1", "okta"],
  "web security": ["6B7280", "owasp"],
  "pdf viewer": ["6B7280"],
  h2: ["1021FF"],
  git: ["F05032", "git"],
  docker: ["2496ED", "docker"],
  "github actions": ["2088FF", "githubactions"],
  "ci/cd": ["111827", "github"]
};

function badgeUrl(label: string) {
  const [color, logo] = BADGES[label.toLowerCase()] ?? ["6B7280"];
  // shields.io: dashes in the label must be escaped as "--".
  const text = encodeURIComponent(label).replace(/-/g, "--");
  const logoPart = logo ? `&logo=${logo}&logoColor=white` : "";
  return `https://img.shields.io/badge/${text}-${color}?style=flat-square${logoPart}`;
}

export function TechTag({ label }: { label: string }) {
  return <img src={badgeUrl(label)} alt={label} className="h-[22px]" />;
}
