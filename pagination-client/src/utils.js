const paginate = (followers) => {
  const perPage = 8;
  const pageCount = Math.ceil(followers.length / perPage);

  const newFollowers = Array.from({ length: pageCount }, (v, i) => {
    const start = i * perPage;
    return followers.slice(start, start + perPage);
  });
  return newFollowers;
};

export default paginate;
