import HomePagfeContent from "@/components/Home/HomePageContent/HomePagfeContent";

type TParams = Promise<{category: string}>;

export default async function Home({searchParams}: {searchParams: TParams}) {
  const category = (await searchParams).category || '';
  return (
    <div className="pt-34">
      <HomePagfeContent category={category} />
    </div>
  );
}
