// ─── Raw API types (shapes returned by the server) ───────────────────────────

export type ApiArticleItem = {
  id: string;
  source: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  imageUrl: string | null;
  category: string;
};

export type ApiNewsAllResponse = {
  success: boolean;
  updatedAt: string;
  total: number;
  categories: Record<string, ApiArticleItem[]>;
};

export type ApiNewsCategoryResponse = {
  success: boolean;
  category: string;
  categoryName: string;
  updatedAt: string;
  articles: ApiArticleItem[];
};

export type ApiArticleDetailResponse = {
  success: boolean;
  article: ApiArticleItem & {
    body?: (string | { bold: string })[];
  };
};

// ─── Category mapping ─────────────────────────────────────────────────────────

const CATEGORY_ENDPOINT: Record<string, string> = {
  "Hướng dẫn": "guides",
  "Công nghệ tài chính": "fintech",
  "Phân tích thị trường": "market-analysis",
  "Chiến lược giao dịch": "trading-strategy",
};

// ─── Fetch ────────────────────────────────────────────────────────────────────

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, { next: { revalidate: 60 } } as RequestInit);
  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
  return res.json();
}

// Flatten all categories into one list, preserving order
export async function fetchNews(): Promise<ApiArticleItem[]> {
  const data = await apiFetch<ApiNewsAllResponse>("/api/news");
  return Object.values(data.categories).flat();
}

export async function fetchNewsByCategory(category: string): Promise<ApiArticleItem[]> {
  const endpoint = CATEGORY_ENDPOINT[category];
  if (!endpoint) return fetchNews();
  const data = await apiFetch<ApiNewsCategoryResponse>(`/api/news/${endpoint}`);
  return data.articles;
}

export async function fetchNewsArticle(id: string): Promise<ApiArticleDetailResponse["article"]> {
  const data = await apiFetch<ApiArticleDetailResponse>(`/api/news/article/${id}`);
  return data.article;
}
