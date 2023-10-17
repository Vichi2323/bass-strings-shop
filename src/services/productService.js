const baseUrl = " http://localhost:3001/";

export async function getProducts(category) {
  const response = await fetch(baseUrl + "bassStrings?category=" + category);
  if (response.ok) return response.json();
  throw response;
}

export async function getProduct(id) {
  const response = await fetch(baseUrl + "bassStrings/" + id);
  if (response.ok) return response.json();
  throw response;
}
