import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogsBySlug } from "@/app/api";
import SocialShareButtons from "../components/SocialShareButtons";

function formatDateUTC(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = d.getUTCDate().toString().padStart(2, "0");
  const month = months[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  return `${month} ${day}, ${year}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const response = await getBlogsBySlug(slug);
    const payload = response?.data ?? response;
    const nested = payload?.data ?? payload;
    const post = nested?.blog ?? nested ?? null;

    if (!post) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const title = post?.metaTitle || post?.title || "Blog";
    const description =
      post?.metaDescription ||
      post?.excerpt ||
      post?.autoExcerpt ||
      "Blog article";
    const keywords =
      post?.metaKeywords ||
      "technology, digital transformation, security, AI, cloud, innovation";
    const author =
      `${post?.author?.firstName ?? ""} ${
        post?.author?.lastName ?? ""
      }`.trim() || "Balosh Team";
    const publishedTime = post?.createdAt;
    const modifiedTime = post?.updatedAt || post?.createdAt;

    return {
      title,
      description,
      keywords,
      authors: [{ name: author }],
      openGraph: {
        title,
        description,
        type: "article",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/blog/${slug}`,
        images: post?.featuredImage
          ? [
              {
                url: post.featuredImage,
                width: 1200,
                height: 630,
                alt: post?.title || title,
              },
            ]
          : [],
        publishedTime,
        modifiedTime,
        authors: [author],
        section: post?.category?.name || "Technology",
        tags: post?.tags || [],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: post?.featuredImage ? [post.featuredImage] : [],
        creator: post?.author?.username
          ? `@${post.author.username}`
          : undefined,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/blog/${slug}`,
      },
    };
  } catch (e) {
    console.error("Error generating blog post metadata:", e);
    return { title: "Blog", description: "Blog article" };
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await getBlogsBySlug(slug);
  const payload = response?.data ?? response;
  const nested = payload?.data ?? payload;
  const post = nested?.blog ?? nested ?? null;

  if (!post) {
    notFound();
  }

  const title: string = post.title ?? "";
  const featuredImage: string = post.featuredImage ?? "";
  const authorName: string = `${post?.author?.firstName ?? ""} ${
    post?.author?.lastName ?? ""
  }`.trim();
  const authorBio: string = post?.author?.bio ?? "";
  const authorUserName: string = post?.author?.username ?? "";
  const authorAvatar: string | undefined = post?.author?.profilePhoto;
  const readTime: string = post?.readTime ? `${post.readTime} min read` : "";
  const createdAt: string = formatDateUTC(post?.createdAt);
  const contentHtml: string = post?.content ?? "";
  const categoryName: string = post?.category?.name ?? "";
  const excerpt: string = post?.excerpt || post?.autoExcerpt || "";

  return (
    <main className="bg-white min-h-screen">
      <article className="mx-auto pt-8 pb-0">
        {/* Breadcrumbs */}
        <nav
          className="text-xs sm:text-sm px-4 text-gray-500 mb-3 sm:mb-4 max-w-4xl mx-auto"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li className="text-gray-400">›</li>
            <li>
              <Link href="/blog" className="hover:text-gray-700">
                Blog
              </Link>
            </li>
            <li className="text-gray-400">›</li>
            <li className="truncate max-w-[60ch]" title={title}>
              {title}
            </li>
          </ol>
        </nav>

        {/* Meta top row (category + read time) */}
        <div className="flex items-center px-4 gap-3 text-xs sm:text-sm text-gray-600 mb-3 max-w-4xl mx-auto">
          {categoryName && (
            <span className="inline-block px-2 py-1 font-semibold bg-primary/10 border border-primary/20 rounded-full text-primary">
              {categoryName}
            </span>
          )}
          {readTime && <span>{readTime}</span>}
        </div>

        {/* Title */}
        <h1 className="text-3xl px-4 md:text-5xl max-w-4xl mx-auto font-bold leading-tight text-gray-900 mb-3 md:mb-4">
          {title}
        </h1>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-gray-600 px-4 text-sm sm:text-base md:text-lg mb-6 max-w-4xl mx-auto">
            {excerpt}
          </p>
        )}

        <hr className="border-gray-200 px-4 max-w-4xl mx-auto mb-6" />

        {/* Author row */}
        <div className="flex px-4 items-center max-w-4xl mx-auto justify-between mb-6">
          <div className="flex items-center gap-3">
            {authorAvatar && (
              <Image
                src={authorAvatar}
                alt={authorName}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-medium text-gray-900 text-sm">
                {authorName || "Admin"}
              </p>
              <p className="text-xs text-gray-500">Author</p>
            </div>
          </div>
          {createdAt && (
            <p className="text-xs sm:text-sm text-gray-500">
              Published on {createdAt}
            </p>
          )}
        </div>

        <hr className="border-gray-200 px-4 max-w-4xl mx-auto mb-6" />

        {/* Featured Image */}
        {featuredImage && (
          <div className="max-w-5xl mx-auto mb-8 overflow-hidden lg:rounded-lg">
            <Image
              src={featuredImage}
              alt={title}
              width={1200}
              height={350}
              className="w-full object-cover h-[350px]"
            />
          </div>
        )}

        {/* Content */}
        <div className="w-full px-4 overflow-hidden max-w-4xl mx-auto">
          <div
            className="prose prose-lg max-w-full prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:break-words prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-blockquote:border-orange-500 prose-blockquote:text-gray-600 prose-code:text-orange-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-img:rounded-lg prose-img:max-w-full [&>*]:break-words [&>*]:max-w-full"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>

        {/* Share Section */}
        <div className="mt-12 px-4 mb-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Share this article
          </h3>
          <SocialShareButtons title={title} />
        </div>

        {/* Author Section */}
        {(authorName || authorAvatar) && (
          <div className="bg-gray-50 px-4 rounded-lg p-6 md:p-8 ">
            <div className="flex items-start max-w-4xl mx-auto gap-4">
              {authorAvatar ? (
                <Image
                  src={authorAvatar}
                  alt={authorName}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-semibold text-lg">
                    {(authorName || "A").charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900 ">
                  {authorName || "Admin"}
                </h4>
                <p className="text-gray-500 text-sm mb-2">@{authorUserName}</p>
                <p className="text-gray-600 text-sm mb-4">{authorBio}</p>
              </div>
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
