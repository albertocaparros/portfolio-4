import Datetime from './Datetime';

const PostCard = ({ url, title, img, description, datetime }) => {
  return (
    <div class="my-3">
      <a
        class="text-skin-accent inline-block text-lg font-medium decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        href={`./${url}`}
      >
        <h3 class="text-xl font-semibold text-sky-700 decoration-dashed hover:underline dark:text-orange-400">
          {title}
        </h3>
        <Datetime datetime={datetime} size="sm" />
      </a>
      <div class="items-center justify-center lg:flex lg:gap-4">
        <img src={img.url} alt={img.alt} class="h-44 object-cover" />
        <p class="my-3 justify-center">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
