export async function loadJobs(
  version: string,
  pageSkip: string,
  maxResult: string
) {
  const url = `https://api-interview.vanhack.com/v${version}/job?skip=${pageSkip}&maxResult=${maxResult}`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
}

export async function loadDescription(slug: string) {
  const url = `https://api-interview.vanhack.com/v1/job/detail/${slug}`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
}
