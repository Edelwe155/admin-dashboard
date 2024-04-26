import React from "react";

const handleForm = async (formData) => {
  "use server";
  console.log("hello from server");
  console.log(formData);
};

const Page = () => {
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Page;
