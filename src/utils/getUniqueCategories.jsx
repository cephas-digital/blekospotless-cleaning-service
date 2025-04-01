// src/utils/getUniqueCategories.js
export const getUniqueCategories = (images = []) => {
  const categoriesSet = new Set();
  images.forEach((image) => {
    image.categories.forEach((category) => categoriesSet.add(category));
  });
  return Array.from(categoriesSet);
};
