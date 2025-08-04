import { useState } from 'preact/hooks';
import PostCard from '../components/PostCard';

const PostsSection = ({ posts, allTags }) => {
  const [activeTag, setActiveTag] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const tagClass = `text-base list-none border rounded-full py-1 px-4 cursor-pointer transition-colors ${
    activeTag === ''
      ? 'bg-sky-500 text-white border-sky-500 dark:bg-blue-600 dark:border-blue-600'
      : 'bg-sky-50 border-slate-600 hover:bg-sky-200 dark:bg-slate-800 dark:border-blue-200 dark:hover:bg-slate-600'
  }`;

  const filteredPosts = posts
    .filter((post) => !activeTag || post.data.tags.includes(activeTag))
    .filter(
      (post) =>
        post.data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.data.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <section class="mb-6">
      <input
        type="text"
        value={searchQuery}
        onInput={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1);
        }}
        placeholder="Search posts..."
        class="mx-auto mb-6 block w-full max-w-md rounded border p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />
      <div class="mb-4 flex flex-wrap justify-center gap-2">
        <li
          class={`cursor-pointer list-none rounded-full border px-4 py-1 text-base transition-colors ${
            activeTag === ''
              ? 'border-slate-600 bg-sky-200 dark:border-blue-200 dark:bg-slate-700'
              : 'border-slate-600 bg-sky-50 hover:bg-sky-200 dark:border-blue-200 dark:bg-slate-800 dark:hover:bg-slate-600'
          }`}
          onClick={() => {
            setActiveTag('');
            setCurrentPage(1);
          }}
        >
          All
        </li>
        {allTags.map((tag) => (
          <li
            class={`cursor-pointer list-none rounded-full border px-4 py-1 text-base transition-colors ${
              activeTag === tag
                ? 'border-slate-600 bg-sky-200 dark:border-blue-200 dark:bg-slate-700'
                : 'border-slate-600 bg-sky-50 hover:bg-sky-200 dark:border-blue-200 dark:bg-slate-800 dark:hover:bg-slate-600'
            }`}
            onClick={() => {
              setActiveTag(tag);
              setCurrentPage(1);
            }}
          >
            {tag}
          </li>
        ))}
      </div>
      {totalPages > 1 && (
        <div class="mb-4 flex items-center justify-center gap-4 text-2xl">
          <button
            aria-label="Previous page"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            class="text-sky-700 hover:underline disabled:cursor-not-allowed disabled:opacity-50 dark:text-orange-400"
          >
            &lt;
          </button>
          <span class="text-sky-700 dark:text-orange-400">
            {currentPage}/{totalPages}
          </span>
          <button
            aria-label={'Next page'}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            class="text-sky-700 hover:underline disabled:cursor-not-allowed disabled:opacity-50 dark:text-orange-400"
          >
            &gt;
          </button>
        </div>
      )}
      <div class="min-h-[600px]">
        {paginatedPosts.length ? (
          paginatedPosts.map((post) => (
            <PostCard
              url={`./${post.slug}`}
              title={post.data.title}
              img={post.data.image}
              description={post.data.description}
              datetime={post.data.pubDate}
            />
          ))
        ) : (
          <p>No matching posts found.</p>
        )}
      </div>
    </section>
  );
};

export default PostsSection;
