import { student } from "@/lib/dataType";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";

export default function EditModal({
  editStudent,
  oldData,
  onClose,
}: {
  editStudent: (data: student) => void;
  oldData: student;
  onClose: () => void;
}) {
  const [data, setData] = useState<student>(oldData);

  useEffect(() => {
    setData(oldData); // Update state when oldData changes
  }, [oldData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Use the existing id and updated data for newStudent
    const newStudent: student = {
      ...data, // Spread current data, including id
      createdAt: new Date().toLocaleDateString(), // Optionally update createdAt if needed
    };

    editStudent(newStudent); // Call the edit function
    onClose(); // Close the modal
  };

  return (
    <div className="w-screen h-screen absolute bg-black-base bg-opacity-30 justify-center items-center flex top-0 left-0">
      <form onSubmit={handleSubmit} className="bg-white-base rounded-md w-full sm:max-w-xl mx-5">
        <div className="flex flex-row justify-between border-b-2 p-5">
          <p className="font-bold">Edit Data Student</p>
          <button type="button" onClick={onClose}>
            <IoClose />
          </button>
        </div>

        <div className="p-5 my-2">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col gap-5 grow">
              <div className="flex flex-col text-sm">
                <label htmlFor="name" className="font-bold">Full Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="btn-secondary"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col text-sm">
                <label htmlFor="phone" className="font-bold">Phone Number</label>
                <input
                  type="text"
                  placeholder="+62 08123"
                  className="btn-secondary"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col text-sm">
                <label htmlFor="email" className="font-bold">Email</label>
                <input
                  type="text"
                  placeholder="johndoe@mail.com"
                  className="btn-secondary"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 grow">
              <div className="flex flex-col text-sm">
                <label htmlFor="instance" className="font-bold">Instance</label>
                <input
                  type="text"
                  placeholder="Instance"
                  className="btn-secondary"
                  name="instance"
                  value={data.instance}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col text-sm">
                <label htmlFor="password" className="font-bold">Password</label>
                <input
                  type="text"
                  placeholder="Password"
                  className="btn-secondary"
                  name="password"
                />
              </div>
              <div className="flex flex-col text-sm">
                <label htmlFor="retype" className="font-bold">Re-type Password</label>
                <input
                  type="text"
                  placeholder="Re-type Password"
                  className="btn-secondary"
                  name="retype"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 text-sm">
            <p className="font-bold">Add Image</p>
            <div className="w-full px-5 py-7 text-center flex flex-col items-center shadow-custom border-[1px] border-[#D0D5DD] rounded-md">
              <div className="w-[40px] mb-3 h-[40px] rounded-full border-[1px] border-[#D0D5DD] flex justify-center items-center">
                <MdOutlineFileUpload className="w-[50%] h-[50%]" />
              </div>
              <p className="text-gray-accent">
                <span className="text-black-base font-semibold">Click to upload{" "}</span>
                or drag and drop<br />
                SVG, PNG, JPG, or GIF <br />
                (max, 800 X 800 px)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-end border-t-2 p-5">
          <button className="btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}
