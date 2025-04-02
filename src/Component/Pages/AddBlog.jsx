import { useState } from "react";
import { TextareaAutosize, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import UseAuth from "../Hook/UseAuth";

const Imaguplodekey = import.meta.env.VITE_IMGBB;
const uploadUrl = `https://api.imgbb.com/1/upload?key=${Imaguplodekey}`;

const AddBlog = () => {
  const [loading, setLoading] = useState(false);
  const { user } = UseAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const title = form.title.value;
    const photoFile = form.file.files[0];
    const description = form.description.value;
    const email = form.email.value;

    const data = { title, photoFile, description };
    console.log(data);

    if (!photoFile) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Please select an image!",
        showConfirmButton: false,
        timer: 500,
      });
      setLoading(false);
      return;
    }

    // Upload image to imgBB
    const formData = new FormData();
    formData.append("image", photoFile);

    try {
      const response = await axios.post(uploadUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        const imageUrl = response.data.data.url;
        const blogData = { title, image: imageUrl, description, email };

        const datas = await axios
          .post(`http://localhost:5000/blog`, blogData)
          .then((result) => {
            console.log(result);
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Blog Post successfully!",
              showConfirmButton: false,
              timer: 500,
            });
          });

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Blog added successfully!",
          showConfirmButton: false,
          timer: 500,
        });

        form.reset();
      } else {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Image upload failed!",
          showConfirmButton: false,
          timer: 500,
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Something went wrong!",
        showConfirmButton: false,
        timer: 500,
      });
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="bg-purple-500 h-24">
        <p className="text-3xl font-semibold text-center py-7 text-white">
          Add your Blog
        </p>
      </div>
      <div className="mt-10 px-24">
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              className="w-10/12"
              id="outlined-basic"
              name="title"
              label="Title"
              variant="outlined"
              required
            />
          </div>
          <div className="mt-5">
            <TextField
              className="w-10/12"
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              disabled
              defaultValue={user.email}
              required
            />
          </div>
          <div>
            <input
              name="file"
              type="file"
              className="file-input w-10/12 mt-5"
              accept="image/*"
              required
            />
          </div>
          <div>
            <TextareaAutosize
              name="description"
              className="!w-10/12 !mt-5 !h-40 !border-2 border-[rgba(0,0,0,0.3)]"
              aria-label="empty textarea"
              placeholder="Description"
              required
            />
          </div>
          <div className="px-80">
            <Button
              type="submit"
              className="allartifacts !mt-5"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Add Blog"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
