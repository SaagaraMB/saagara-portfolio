import { MDXRemote } from "next-mdx-remote/rsc";

export default function MDXBody({ source }: { source: string }) {
  return (
    <div className="prose-custom">
      <MDXRemote source={source} />
    </div>
  );
}
