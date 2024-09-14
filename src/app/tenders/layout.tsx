import Navigation from "../_components/tenders/Navigation";

export default async function TendersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mt-[100px] flex w-full gap-[52px] px-[60px]">
      <Navigation />
      {children}
    </div>
  );
}
