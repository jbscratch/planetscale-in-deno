import Counter from "@/islands/Counter.tsx";
// import { db } from "@/src/db/index.ts";

// const pets = await db.selectFrom("pets").selectAll().execute(db);
// console.log("\n Pets Table");
// console.table(pets);


export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />

      <hr></hr>

      <ul>
        {/* {pets.map((pet: {id: number, name: string}) => <li>{pet.name}</li>)} */}
      </ul>

    </div>
  );
}
