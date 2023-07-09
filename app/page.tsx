import RouteProtector from "@/components/RouteProtector";
import Hero from "@/components/Hero";

export default async function Index() {
  return (
    <>
      <Hero />
      <RouteProtector enforce="signed-out" redirectPath="/dashboard" />
    </>
  );
}
