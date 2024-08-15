import { student } from "@/lib/dataType";
import { IoClose } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";

export default function AddModal({addStudent} : { addStudent: (data : student) => void}) {
  function close(e : any) {
    e.preventDefault();
    const modal = document.getElementById("add-modal");
    modal?.classList.remove("flex");
    modal?.classList.add("hidden");
  }

  const handleSubmit =  async (e : any) => {
    e.preventDefault();

    let newStudent : student = {
      id: 0,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      instance: e.target.instance.value,
      createdAt: new Date().toLocaleDateString()
    }
    addStudent(newStudent);
    // clear form
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.instance.value = "";
    e.target.password.value = "";
    e.target.retype.value = "";
    close(e);
  }
  
  return (
    <div
      className="z-50 w-screen h-screen absolute bg-black-base bg-opacity-30 justify-center items-center hidden add-modal top-0 left-0"
      id="add-modal"
    >
      <form onSubmit={handleSubmit} className="bg-white-base rounded-md w-full sm:max-w-xl mx-5 max-h-[90vh] overflow-auto">
        <div className=" flex flex-row justify-between border-b-2 p-5">
          <p className="font-bold">Add New Student</p>
          <button onClick={close}>
            <IoClose />
          </button>
        </div>

        <div className="p-5 my-2">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col gap-5 grow">
              <div className="flex flex-col text-sm">
                <label htmlFor="name" className="font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jhon"
                  className="btn-secondary"
                  name= "name"
                />
              </div>
              <div className="flex flex-col text-sm">
                <label htmlFor="phone" className="font-bold">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+62 08123"
                  className="btn-secondary"
                  name="phone"
                />
              </div>
              <div className="flex flex-col text-sm">
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="jhondoe@mail.com"
                  className="btn-secondary"
                  name="email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 grow">
              <div className="flex flex-col text-sm">
                <label htmlFor="instance" className="font-bold">
                  Instance
                </label>
                <input
                  type="text"
                  placeholder="Instance"
                  className="btn-secondary"
                  name="instance"
                />
              </div>
              <div className="flex flex-col text-sm">
                <label htmlFor="password" className="font-bold">
                  Password
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className="btn-secondary"
                  name="password"
                />
              </div>
              <div className="flex flex-col text-sm">
                <label htmlFor="retype" className="font-bold">
                  Re-type Password
                </label>
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
                <MdOutlineFileUpload className="w-[50%] h-[50%]"/>
              </div>
              <p className="text-gray-accent"><span className="text-black-base font-semibold">Click to upload </span>or drag and drop<br />SVG, PNG, JPG, or GIF <br />(max, 800  X 800 px)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-end border-t-2 p-5">
          <button className="btn-primary">Save</button>
        </div>

        <p></p>
      </form>
    </div>
  );
}
