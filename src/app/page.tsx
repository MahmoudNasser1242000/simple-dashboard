import HomePagfeContent from "@/components/Home/HomePageContent/HomePagfeContent";

type TParams = Promise<{page: number, category: string}>;

export default async function Home({searchParams}: {searchParams: TParams}) {
  const category = (await searchParams).category || '';
  const page = (await searchParams).page || 1;
  return (
    <div className="pt-34">
      <HomePagfeContent category={category} page={page} />
    </div>
  );
}
