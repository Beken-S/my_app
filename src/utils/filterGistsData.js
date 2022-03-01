function filterGistsData(data) {
  return data.map((e) => ({
    id: e.id,
    author: e.owner.login,
    url: e.html_url,
  }));
}

export { filterGistsData };
