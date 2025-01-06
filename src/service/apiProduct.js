const API_URL = "https://5fc9346b2af77700165ae514.mockapi.io/products";

export async function getProducts() {
  const res = await fetch(`${API_URL}`);

  if (!res.ok) throw Error("Failed getting menu");

  const data = await res.json();
  return data;
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw Error("Couldn't find product");

  const data = await res.json();
  return data;
}

console.log(getProducts());
