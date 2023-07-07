import RouteProtector from "@/components/RouteProtector";

export default async function Index() {
  return (
    <>
      <p>Hello world!</p>
      <RouteProtector enforce="signed-out" redirectPath="/dashboard" />
    </>
  );
}
