const SectionTitle = ({ name }: { name: string }) => {
  return (
    <h3 className="py-24 text-center text-3xl font-extrabold capitalize lg:text-4xl">
      {name}
    </h3>
  );
};

export default SectionTitle;
