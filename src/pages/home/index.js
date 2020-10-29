export default function Home() {
  const hello = import.meta.env.SNOWPACK_PUBLIC_HELLO_WORLD;
  const mode = import.meta.env.MODE;
  return (
    <>
      <div>
        {hello} {mode}
      </div>
    </>
  );
}
