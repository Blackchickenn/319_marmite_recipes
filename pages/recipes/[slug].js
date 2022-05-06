import { createClient } from "contentful";

const client = createClient({
  //*Access to Contentful API via env local (w/o env locals they can be showed on Github)
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  //*Fetch data and identify Contentful content
  const res = await client.getEntries({
    content_type: "recipe",
  });

  const paths = res.items.map((item) => {
    //*Mapping over all slug paths and return them back
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async () => {};

export default function RecipeDetails() {
  return <div>Recipe Details</div>;
}
