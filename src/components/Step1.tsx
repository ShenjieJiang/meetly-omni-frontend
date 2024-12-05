import { useFormContext } from "@/context/FormContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  companyName: z
    .string()
    .min(1, "Company Name is required")
    .max(50, "Company Name must be less than 50 characters"),
});

type FormData = z.infer<typeof formSchema>;
const Step1: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
    },
  });
  const { state, updateAction } = useFormContext();
  console.log(state);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    updateAction(data);
    // here if I use ./step2 , will become step1/step2
    navigate("/signup/step2");
  };

  return (
    <>
      <div>Welcome to Omni ! Let's Sign Up Your profile</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Step 1</h2>
        <label>
          Company Name:
          <Input
            {...register("companyName")}
            defaultValue={state.companyName || ""}
          />
        </label>
        {formState.errors.companyName && (
          <p className="text-red-500">{formState.errors.companyName.message}</p>
        )}
        <Button type="submit" className="bg-secondary text-white">
          Next
        </Button>
      </form>
    </>
  );
};

export default Step1;
