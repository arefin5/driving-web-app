import Swal from "sweetalert2";

const DeleteHook = ({ refetch, setRefetch, url }) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: `Yes, delete it!`,
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`${url}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.status === 200) {
            setRefetch(!refetch);
            Swal.fire("Deleted!", "Your file has been deleted", "success");
          } else {
            throw new Error("Failed to delete");
          }
        })
        .catch((error) => {
          console.error("Error deleting:", error);
          Swal.fire("Error", "Failed to delete the file.", "error");
        });
    }
  });
};

export default DeleteHook;
