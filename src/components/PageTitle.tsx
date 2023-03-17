export default function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="my-10 text-center text-3xl font-bold uppercase lg:text-4xl">
      {title}
    </h1>
  );
}
