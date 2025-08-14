import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogsBySlug } from "@/app/api";
import CopyLinkButton from "../components/CopyLinkButton";

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
              <img
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
          <div className="max-w-5xl mx-auto mb-8 overflow-hidden rounded-lg">
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
          <div className="flex justify-center gap-4">
            {/* Twitter */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                title
              )}&url=${encodeURIComponent(
                process.env.NEXT_PUBLIC_SITE_URL || ""
              )}/blog/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                (process.env.NEXT_PUBLIC_SITE_URL || "") + "/blog/" + slug
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                title +
                  " " +
                  (process.env.NEXT_PUBLIC_SITE_URL || "") +
                  "/blog/" +
                  slug
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </a>

            {/* Copy Link */}
            <CopyLinkButton />
          </div>
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
