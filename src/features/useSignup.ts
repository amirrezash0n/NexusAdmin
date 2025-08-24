import { signup as signupApi } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSingup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      navigate("/dashboard");
      toast.success("Confirm your signup!");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Something is wrong to signup , try again later");
    },
  });
  return { signup, isPending };
}
