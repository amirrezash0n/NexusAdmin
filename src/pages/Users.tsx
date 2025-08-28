import { UsersDataTable } from "@/components/panel/UserDataTable";

const userData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    phoneNumber: "+1234567890",
    email: "john@example.com",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    username: "janesmith",
    phoneNumber: "+0987654321",
    email: "jane@example.com",
  },
  {
    id: 3,
    firstName: "Ali",
    lastName: "Rezaei",
    username: "alireza",
    phoneNumber: "+989123456789",
    email: "ali@example.com",
  },
];

export default function Users() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 px-4 md:gap-6 md:py-6">
          <UsersDataTable data={userData} />
        </div>
      </div>
    </div>
  );
}
