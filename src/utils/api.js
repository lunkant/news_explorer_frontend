export function savedArticle(article) {
  return Promise.resolve({ ...article, _id: String(Date.now()) });
}

export function removeSavedArticle(id) {
  return Promise.resolve({ _id: id });
}
