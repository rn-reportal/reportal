export const getDateAndTimeFromPublished = publishedAt => {
  const publishedAtArr = publishedAt.split(/\s/);
  const publishedAtDate = publishedAtArr[0];
  const publishedAtTime = publishedAtArr[1].substr(0, 5);

  return {
    publishedAtDate,
    publishedAtTime,
  };
};
