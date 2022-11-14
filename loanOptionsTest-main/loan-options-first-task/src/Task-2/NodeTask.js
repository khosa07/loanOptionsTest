import fetch from "node-fetch";
const getData = async (category, limit) => {
  const data = await fetch("https://api.publicapis.org/entries")
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });

  const sortedArrayDataByCategory = sortArrayByCategory(category, data);
  if (sortedArrayDataByCategory.length <= 0) {
    console.log("no results");
    return;
  }
  const sortedAndFilteredArray = limitArrayByNumber(
    limit,
    sortedArrayDataByCategory
  );
  console.log(sortedAndFilteredArray);
};

const sortArrayByCategory = (category, arrayData) => {
  const sortedArrayData = arrayData.entries.filter(
    (element) => element.Category === category
  );
  return sortedArrayData;
};

const limitArrayByNumber = (limit, sortedArrayDataByCategory) => {
  const filteredArray = sortedArrayDataByCategory.slice(0, limit);
  return filteredArray;
};

await getData("Animals", 7);
