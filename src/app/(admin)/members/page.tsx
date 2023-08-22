import { addNewUser } from "@/lib/actions";

const page = () => {
  return (
    <div>
      <h1>Add a Member</h1>
      <form action={addNewUser}>
        <input name="email" placeholder="email" />
        <input name="First_name" placeholder="First_name" />
        <input name="last_name" placeholder="last_name" />
        <input name="member_id" placeholder="member_id" />
        <input name="category" placeholder="category" />
        <input name="hasCard" placeholder="hasCard" />
        <input name="joined_at" placeholder="joined_at" />
        <input name="unit_name" placeholder="unit_name" />
        <input name="district" placeholder="district" />
        <input name="address" placeholder="address" />
        <input name="role" placeholder="role" />
        <button type="submit">Save User</button>
      </form>
    </div>
  );
};

export default page;

// id Int @id @default(autoincrement())
// email String
// First_name String
// last_name String
// member_id String @default(uuid())
// contact String
// category String
// hasCard Boolean
// joined_at DateTime
// unit_name String
// district String
// address String
// role String
// occupation String
// payment Payment[]
// activities Activity[]
