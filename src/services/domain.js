export function getDomain() {
  const host = window.location.host;
  const domain = host.split('.')[0];

  return domain;
}
