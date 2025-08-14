import { Metadata } from "next";
import BlogHeader from "./components/BlogHeader";
import BlogContent from "./components/BlogContent";
import BlogSidebar from "./components/BlogSidebar";
import { getBlogs, getRecentBlogs } from "../api";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  try {
    const resolved = await searchParams;
    const page = Number(resolved?.page ?? 1) || 1;
    const data = await getBlogs(page, 3);

    // Get SEO data from the first blog post if available
    const firstPost = data?.data?.blogs?.[0];
    const seoTitle =
      firstPost?.metaTitle || "Blog - Balosh Integrated Services";
    const seoDescription =
      firstPost?.metaDescription ||
      "Latest insights, updates, and thought leadership on digital transformation, technology trends, and industry best practices from Balosh Integrated Services.";

    return {
      title: page > 1 ? `${seoTitle} - Page ${page}` : seoTitle,
      description: seoDescription,
      keywords:
        firstPost?.metaKeywords ||
        "technology, digital transformation, security, AI, cloud, innovation",
      openGraph: {
        title: page > 1 ? `${seoTitle} - Page ${page}` : seoTitle,
        description: seoDescription,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/blog${
          page > 1 ? `?page=${page}` : ""
        }`,
        images: firstPost?.featuredImage
          ? [
              {
                url: firstPost.featuredImage,
                width: 1200,
                height: 630,
                alt: firstPost.title || seoTitle,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: page > 1 ? `${seoTitle} - Page ${page}` : seoTitle,
        description: seoDescription,
        images: firstPost?.featuredImage ? [firstPost.featuredImage] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog - Balosh Integrated Services",
      description:
        "Latest insights, updates, and thought leadership on digital transformation, technology trends, and industry best practices from Balosh Integrated Services.",
    };
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolved = await searchParams;
  const page = Number(resolved?.page ?? 1) || 1;

  // Fetch data in parallel
  const [data, recentData] = await Promise.all([
    getBlogs(page, 3),
    getRecentBlogs(5),
  ]);

  const posts = data?.data?.blogs ?? [];
  const pagination = data?.data?.pagination ?? {
    currentPage: page,
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
  };

  const recentPosts = recentData?.data?.blogs ?? [];

  return (
    <main className="bg-white min-h-screen">
      <BlogHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area - 3 columns */}
          <div className="lg:col-span-3">
            <BlogContent posts={posts} pagination={pagination} />
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <BlogSidebar recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    </main>
  );
}
