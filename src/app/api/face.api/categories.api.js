export const categories = {
  outerwear: { id: "67rdca3eeb7f6fgeed471818", name: "Верхняя одежда" },
  dresses: { id: "67rdca3eeb7f6fgeed471820", name: "Платья" },
  skirts: { id: "67rdca3eeb7f6fgeed471814", name: "Юбки" },
  tshirtsAndLongsleeves: {
    id: "67rdca3eeb7f6fgeed471822",
    name: "Футболки и лонгсливы",
  },
  costumes: { id: "67rdca3eeb7f6fgeed471824", name: "Костюмы" },
};

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(categories);
    }, 2000);
  });

export default {
  fetchAll,
};
