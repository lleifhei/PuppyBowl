//API for PuppyBowl
const puppyAPI = "https://fsa-puppy-bowl.herokuapp.com/api/2412-ftb-mt-web-pt/players";
const fetchPuppies = async () => {
  const response = await fetch(puppyAPI);
  const data = await response.json();
  return data.data;
}
const fetchSinglePuppy = async (id) => {
  const response = await fetch(`${puppyAPI}/${id}`);
  const data = await response.json();
  return data.data;
}
const createPuppy = async (newPuppy) => {
  const response = await fetch(puppyAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPuppy),
  });
  const data = await response.json();
  return data.data;