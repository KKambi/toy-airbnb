const utilFetch = {
  async getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  },
};

export default utilFetch;
