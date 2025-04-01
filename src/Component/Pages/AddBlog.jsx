import { TextareaAutosize, TextField } from "@mui/material";
import Button from "@mui/material/Button";

const AddBlog = () => {
  return (
    <div className="">
      <div className="bg-purple-500 h-24">
        <p className="text-3xl font-semibold text-center py-7 text-white">
          Add your Blog
        </p>
      </div>
      <div className="mt-10 px-24">
        <form action="">
          <div>
            <TextField
              className="w-10/12 "
              id="outlined-basic"
              label="Title"
              variant="outlined"
            />
          </div>
          <div>
            <input
              type="file"
              className="file-input w-10/12 mt-5  !outline-none"
            />
          </div>
          <div>
            <TextareaAutosize
              className="!w-10/12 !mt-5 !h-40 !border-2 border-[rgba(0,0,0,0.3)] "
              aria-label="empty textarea"
              placeholder="description"
            />
          </div>
          <div className="px-80">
            <Button type="submit" className="allartifacts !mt-5 ">
              Add Blog
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
