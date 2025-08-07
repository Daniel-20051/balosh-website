import BlogHeader from "./components/BlogHeader";
import BlogContent from "./components/BlogContent";
import BlogSidebar from "./components/BlogSidebar";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area - 3 columns */}
          <div className="lg:col-span-3">
            <BlogContent />
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
