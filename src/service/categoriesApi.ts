import { api } from "./api";

export type Category = {
  id: number;
  name: string;
  color: string;
};

export async function getCategories(): Promise<Category[]> {
  const { data } = await api.get("/categories");
  return data;
}

export async function getCategoryById(id: number): Promise<Category> {
  const { data } = await api.get(`/categories/${id}`);
  return data;
}

export async function createCategory(category: Category): Promise<Category> {
  const { data } = await api.post("/categories", category);
  return data;
}

export async function updateCategory(category: Category): Promise<Category> {
  const { data } = await api.put(`/categories/${category.id}`, category);
  return data;
}

export async function deleteCategory(id: number): Promise<void> {
  await api.delete(`/categories/${id}`);
}

export const categoriesApi = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
