export default function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="my-10 text-center text-4xl font-bold uppercase">{title}</h1>
  );
}
